import json
import os

# Configuration
ASSETS_DIR = os.path.join(os.path.dirname(__file__), '..')
INPUT_FILE = os.path.join(ASSETS_DIR, '.tmp', 'clash_results.json')
OUTPUT_MD = os.path.join(ASSETS_DIR, 'exhibition_map.md')

def load_results():
    if not os.path.exists(INPUT_FILE):
        return None
    with open(INPUT_FILE, 'r') as f:
        return json.load(f)

def generate_map(results):
    print("--- 🗺️  Mapping Exhibition Space 🗺️  ---")
    
    winners = results.get('manifesto_winners', [])
    archive = results.get('archive', [])
    gap = results.get('critical_gap', None)
    
    md_content = "# The Threshold Dual-Reality Exhibition Map\n\n"
    
    md_content += "## 🏛️ Physical Gallery (The Winners)\n"
    md_content += "_High Alignment / High Friction Assets deployed as large-scale physical artifacts._\n\n"
    
    for i, file in enumerate(winners):
        md_content += f"### {i+1}. The {file['id']} Monolith\n"
        md_content += f"- **Stats**: Friction {file['stats']['aesthetic_friction']} | Alignment {file['stats']['threshold_alignment']}\n"
        md_content += f"- **Manifesto Stance**: {file['description']}\n\n"
        
    md_content += "## 🌐 Virtual Data-Stream (The Archive)\n"
    md_content += "_Raw signals and lower-tier assets floating in the AR/VR layer._\n\n"
    
    for file in archive:
        md_content += f"- **Node**: *{file['id']}* (Heat: {file['stats']['technical_heat']})\n"
        
    if gap:
        md_content += "\n## ⚠️ The Void (Critical Research Gap)\n"
        md_content += f"**{gap['id']}** looms over the gallery. Its technical heat ({gap['stats']['technical_heat']}) exceeds our internal capacities. We must build to fill this void.\n"
        
    with open(OUTPUT_MD, 'w') as f:
        f.write(md_content)
        
    print(f"--- 🗺️  Map Generated at {OUTPUT_MD} ---")

if __name__ == "__main__":
    results = load_results()
    if results:
        generate_map(results)
    else:
        print("No match results found. Run clash_engine.py first.")
