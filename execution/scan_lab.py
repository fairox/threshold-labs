import os
import json
import argparse
import time
from datetime import datetime

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
    os.makedirs(os.path.dirname(args.output), exist_ok=True)
    
    for root_path in args.paths:
        if not os.path.exists(root_path):
            print(f"Warning: Path not found: {root_path}")
            continue
            
        print(f"Scanning: {root_path}")
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
        
    print(f"Scanned {len(assets)} assets. Saved to {args.output}")

if __name__ == "__main__":
    main()
