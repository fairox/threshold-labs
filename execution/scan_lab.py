#!/usr/bin/env python3
"""
scan_lab.py: Scans the lab_assets directory and generates a JSON inventory.

Usage:
    python execution/scan_lab.py [--paths PATHS] [--output OUTPUT]

Inputs:
    - --paths: List of directories to scan (default: lab_assets)
    - --output: Output JSON path (default: .tmp/internal_context.json)

Outputs:
    - JSON file containing inventory of assets (filename, path, size, modified, type)
"""

import os
import json
import argparse
import time
from datetime import datetime
from dotenv import load_dotenv

load_dotenv()

def parse_args():
    parser = argparse.ArgumentParser(description="Scan Lab Assets")
    parser.add_argument("--paths", nargs="+", default=["lab_assets"], help="Paths to scan")
    parser.add_argument("--output", default=".tmp/internal_context.json", help="Output JSON path")
    return parser.parse_args()

def get_file_info(path):
    stats = os.stat(path)
    return {
        "filename": os.path.basename(path),
        "path": path,
        "size_bytes": stats.st_size,
        "modified_timestamp": datetime.fromtimestamp(stats.st_mtime).isoformat(),
        "type": os.path.splitext(path)[1].lower()
    }

def main():
    args = parse_args()
    assets = []
    
    # Ensure tmp dir exists
    output_dir = os.path.dirname(args.output)
    if output_dir:
        os.makedirs(output_dir, exist_ok=True)
    
    print(f"Starting scan of: {args.paths}")
    
    for root_path in args.paths:
        if not os.path.exists(root_path):
            print(f"Warning: Path not found: {root_path}")
            continue
            
        print(f"Scanning directory: {root_path}")
        for root, dirs, files in os.walk(root_path):
            # Exclude node_modules and .git
            if "node_modules" in dirs:
                dirs.remove("node_modules")
            if ".git" in dirs:
                dirs.remove(".git")
                
            for file in files:
                full_path = os.path.join(root, file)
                # Skip hidden files
                if file.startswith("."):
                    continue
                    
                try:
                    assets.append(get_file_info(full_path))
                except Exception as e:
                    print(f"Error scanning {full_path}: {e}")
                
    with open(args.output, "w", encoding="utf-8") as f:
        json.dump(assets, f, indent=2)
        
    print(f"Success: Scanned {len(assets)} assets. Saved to {args.output}")

if __name__ == "__main__":
    main()
