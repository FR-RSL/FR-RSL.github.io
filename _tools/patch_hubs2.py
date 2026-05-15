#!/usr/bin/env python3
"""Second pass: add Space Mono font, rarity-line CSS, fix hero title gradient, add font to faction-title."""
import re, glob, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
hubs = sorted(glob.glob(os.path.join(ROOT, "pages/factions/faction*/hub.html")))

FONT_IMPORT = '@import url(\'https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap\');\n'
RARITY_LINE_CSS = '''
        .rarity-line {
            flex: 1;
            height: 1px;
            background: var(--glass-border);
        }
'''
FACTION_TITLE_FIX = "font-family: 'Space Mono', monospace;\n            font-size: 2.2rem;\n            font-weight: 700;\n            margin: 0;\n            color: var(--faction-primary);\n            letter-spacing: 2px;"
BACK_TO_HOME_FIX = '''        .back-to-home {
            background: transparent;
            border: 1px solid var(--glass-border);
            border-radius: 2px;
            padding: 0.5rem 1rem;
            color: var(--text-muted);
            text-decoration: none;
            font-size: 0.85rem;
            font-weight: 500;
            transition: color 0.2s, border-color 0.2s;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .back-to-home:hover {
            color: var(--text-light);
            border-color: var(--primary);
        }'''

def patch(path):
    with open(path, encoding='utf-8') as f:
        html = f.read()

    # Add font import at top of style block if not already there
    if 'Space Mono' not in html or 'fonts.googleapis.com' not in html:
        html = html.replace('<style>', '<style>\n        ' + FONT_IMPORT.strip())

    # Add rarity-line CSS if missing
    if '.rarity-line' not in html:
        html = html.replace('</style>', RARITY_LINE_CSS + '    </style>', 1)

    # Fix faction-title: replace gradient with plain color
    css_title_pattern = r'\.faction-title\s*\{[^}]+\}'
    if re.search(css_title_pattern, html):
        html = re.sub(css_title_pattern, '.faction-title {\n            ' + FACTION_TITLE_FIX + '\n        }', html)

    # Fix back-to-home CSS: replace old definition
    bth_pattern = r'\/\* Bouton retour.*?\.back-to-home:hover\s*\{[^}]+\}'
    if re.search(bth_pattern, html, re.DOTALL):
        html = re.sub(bth_pattern, BACK_TO_HOME_FIX, html, flags=re.DOTALL)
    else:
        # just fix border-radius in existing back-to-home
        html = re.sub(r'(\.back-to-home\s*\{[^}]*)border-radius:[^;]+;', r'\1border-radius: 2px;', html)

    # Fix faction-hero: remove ::before entirely from HTML too
    html = re.sub(r'\s*<\!-- .{0,30}animation.{0,30}-->', '', html)

    # Fix hero section border-radius
    html = re.sub(r'(faction-hero[^}]*border-radius:)\s*\d+px', r'\g<1> 2px', html)

    # Ensure faction-hero has no heavy gradient, just subtle bg
    # Also remove animation: float from faction-hero::before (already in CSS pass)

    # Fix .champion-card border-radius in CSS
    html = re.sub(r'(\.champion-card\s*\{[^}]*)border-radius:\s*\d+px', r'\g<1>border-radius: 2px', html)

    # Fix .champion-image border-radius
    html = re.sub(r'(\.champion-image img\s*\{[^}]*)border-radius:\s*\d+px', r'\g<1>border-radius: 2px', html)

    # Clean up blank lines
    html = re.sub(r'\n{3,}', '\n\n', html)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Patched: {os.path.relpath(path, ROOT)}")

for hub in hubs:
    try:
        patch(hub)
    except Exception as e:
        print(f"ERROR {hub}: {e}")

print(f"\nDone: {len(hubs)} hubs patched.")
