import os
import argparse
import shutil
from datetime import datetime

def parse_args():
    parser = argparse.ArgumentParser(description="Publish Research Brief")
    parser.add_argument("input_file", help="Path to markdown brief")
    parser.add_argument("--target_dir", default="deliverables", help="Target directory for publication")
    return parser.parse_args()

def main():
    args = parse_args()
    
    if not os.path.exists(args.input_file):
        print(f"Error: Input file needed: {args.input_file}")
        return

    # Ensure deliverables dir exists
    os.makedirs(args.target_dir, exist_ok=True)
    
    # Create valid filename with timestamp
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    basename = os.path.basename(args.input_file)
    name, ext = os.path.splitext(basename)
    new_name = f"{name}_{timestamp}{ext}"
    
    dest_path = os.path.join(args.target_dir, new_name)
    
    shutil.copy2(args.input_file, dest_path)
    
    print(f"SUCCESS: Research Brief published to {dest_path}")
    print("TODO: Connect Google Drive API for cloud upload.")

if __name__ == "__main__":
    main()
