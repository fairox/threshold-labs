import feedparser
import json
import os
import argparse
from datetime import datetime
from email.utils import parsedate_to_datetime
import time

def parse_args():
    parser = argparse.ArgumentParser(description="Fetch RSS feeds")
    parser.add_argument("--urls", nargs="+", help="List of RSS URLs", required=True)
    parser.add_argument("--max", type=int, default=100, help="Max posts per feed")
    parser.add_argument("--output", default=".tmp/external_signals.json", help="Output JSON path")
    return parser.parse_args()

def normalize_entry(entry, source_url):
    # Try to parse published date, fallback to now
    try:
        if hasattr(entry, 'published_parsed') and entry.published_parsed:
            # Struct time to datetime
            dt = datetime.fromtimestamp(time.mktime(entry.published_parsed))
        elif hasattr(entry, 'updated_parsed') and entry.updated_parsed:
            dt = datetime.fromtimestamp(time.mktime(entry.updated_parsed))
        else:
            dt = datetime.now()
    except Exception:
        dt = datetime.now()
        
    return {
        "title": getattr(entry, "title", "No Title"),
        "link": getattr(entry, "link", ""),
        "timestamp": dt.isoformat(),
        "content": getattr(entry, "summary", getattr(entry, "description", "")),
        "source": source_url,
        "id": getattr(entry, "id", getattr(entry, "link", ""))
    }

def main():
    args = parse_args()
    all_entries = []
    
    # Ensure tmp dir exists
    os.makedirs(os.path.dirname(args.output), exist_ok=True)
    
    print(f"Fetching {len(args.urls)} feeds...")
    
    for url in args.urls:
        print(f"Processing: {url}")
        try:
            feed = feedparser.parse(url)
            print(f"  Found {len(feed.entries)} entries")
            
            entries = feed.entries[:args.max]
            normalized = [normalize_entry(e, url) for e in entries]
            all_entries.extend(normalized)
        except Exception as e:
            print(f"  Error fetching {url}: {e}")
            
    with open(args.output, "w", encoding="utf-8") as f:
        json.dump(all_entries, f, indent=2)
        
    print(f"Saved {len(all_entries)} combined entries to {args.output}")

if __name__ == "__main__":
    main()
