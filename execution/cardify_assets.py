import os
import json
import random
from datetime import datetime

# Configuration
ASSETS_DIR = os.path.join(os.path.dirname(__file__), '..')
OUTPUT_DIR = os.path.join(ASSETS_DIR, '.tmp')
OUTPUT_FILE = os.path.join(OUTPUT_DIR, 'cards.json')

# Mock Vision LLM function
def analyze_asset(file_path):
    """
    In a real scenario, this would send the image/text to a generic Vision LLM 
    to analyze aesthetic, tech, spatial, and alignment scores.
    For now, we simulate this 'Interrogation'.
    """
    filename = os.path.basename(file_path)
    
    # Deterministic seed for consistency in demo
    random.seed(filename) 
    
    return {
        "id": filename,
        "type": "Internal Asset" if "renders" in file_path or "sketches" in file_path else "External Signal",
        "path": file_path,
        "stats": {
            "aesthetic_friction": random.randint(40, 99),
            "technical_heat": random.randint(30, 95),
            "spatial_viability": random.randint(20, 100),
            "threshold_alignment": random.randint(50, 98)
        },
        "description": f"Automated analysis of {filename}"
    }

def scan_directory(directory, allowed_extensions=('.png', '.jpg', '.jpeg', '.pdf', '.md')):
    assets = []
    if not os.path.exists(directory):
        print(f"Warning: Directory {directory} does not exist.")
        return assets
        
    for root, _, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(allowed_extensions):
                full_path = os.path.join(root, file)
                assets.append(full_path)
    return assets

def main():
    print("--- 🃏 Starting Cardification Protocol ---")
    
    # scan directories
    renders = scan_directory(os.path.join(ASSETS_DIR, 'renders'))
    sketches = scan_directory(os.path.join(ASSETS_DIR, 'sketches'))
    # "docs" or root files can be treated as assets too, but let's stick to the prompt's implied scope
    
    all_files = renders + sketches
    print(f"Found {len(all_files)} raw assets.")
    
    cards = []
    for file_path in all_files:
        card = analyze_asset(file_path)
        cards.append(card)
        print(f"  > Cardified: {card['id']} [Heat: {card['stats']['technical_heat']}]")
        
    # Also Mock generate some "External Signals" for the Clash
    external_signals = [
        "The Gaussian Splatting Crisis",
        "The Agentic Architect Paper",
        "Generative Zoning Regulations"
    ]
    
    for signal in external_signals:
        random.seed(signal)
        cards.append({
            "id": signal,
            "type": "External Signal",
            "path": "N/A",
            "stats": {
                "aesthetic_friction": random.randint(50, 90),
                "technical_heat": random.randint(70, 99), # External often has high heat
                "spatial_viability": random.randint(10, 60),
                "threshold_alignment": random.randint(20, 80)
            },
            "description": "Ingested signal from external web scan."
        })
        print(f"  > Ingested Signal: {signal}")

    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)
        
    with open(OUTPUT_FILE, 'w') as f:
        json.dump(cards, f, indent=2)
        
    print(f"--- 🃏 Deck Created: {len(cards)} Cards saved to {OUTPUT_FILE} ---")

if __name__ == "__main__":
    main()
