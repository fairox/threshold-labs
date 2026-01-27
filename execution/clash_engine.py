import json
import os

# Configuration
ASSETS_DIR = os.path.join(os.path.dirname(__file__), '..')
INPUT_FILE = os.path.join(ASSETS_DIR, '.tmp', 'cards.json')
OUTPUT_FILE = os.path.join(ASSETS_DIR, '.tmp', 'clash_results.json')

def load_deck():
    if not os.path.exists(INPUT_FILE):
        print("No deck found. Run cardify_assets.py first.")
        return []
    with open(INPUT_FILE, 'r') as f:
        return json.load(f)

def calculate_power_level(stats):
    # A weighted score for "Total Power"
    # We value Alignment and Friction most for "Winning" the Manifesto slot
    return (
        stats['aesthetic_friction'] * 1.2 + 
        stats['threshold_alignment'] * 1.5 + 
        stats['technical_heat'] * 1.0 + 
        stats['spatial_viability'] * 0.8
    ) / 4.5

def clash(deck):
    print("--- ⚔️  The Clash Begins ⚔️  ---")
    
    ranked_cards = []
    
    for card in deck:
        power = calculate_power_level(card['stats'])
        card['power_level'] = power
        ranked_cards.append(card)
        
    # Sort by power level descending
    ranked_cards.sort(key=lambda x: x['power_level'], reverse=True)
    
    winners = ranked_cards[:5] # Top 5 make the Manifesto
    losers = ranked_cards[5:]
    
    print(f"Top Card: {winners[0]['id']} (Power: {winners[0]['power_level']:.1f})")
    print(f"Lowest Card: {ranked_cards[-1]['id']} (Power: {ranked_cards[-1]['power_level']:.1f})")
    
    results = {
        "manifesto_winners": winners,
        "research_gaps": [c for c in losers if c['type'] == 'External Signal'], # External signals that lost to internal ones might still be gaps if high heat
        "archive": losers
    }
    
    # Logic: If an External Signal has higher Technical Heat than the best Internal Asset, flag it as a Critical Gap
    top_internal = max([c for c in deck if c['type'] == 'Internal Asset'], key=lambda x: x['stats']['technical_heat'], default=None)
    top_external = max([c for c in deck if c['type'] == 'External Signal'], key=lambda x: x['stats']['technical_heat'], default=None)
    
    if top_internal and top_external:
        if top_external['stats']['technical_heat'] > top_internal['stats']['technical_heat']:
            print(f"⚠️  CRITICAL GAP: External Signal '{top_external['id']}' has higher heat ({top_external['stats']['technical_heat']}) than best Internal Asset '{top_internal['id']}' ({top_internal['stats']['technical_heat']}).")
            results['critical_gap'] = top_external
    
    with open(OUTPUT_FILE, 'w') as f:
        json.dump(results, f, indent=2)
        
    print(f"--- ⚔️  Clash Complete. Results saved to {OUTPUT_FILE} ---")

if __name__ == "__main__":
    deck = load_deck()
    if deck:
        clash(deck)
