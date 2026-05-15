#!/usr/bin/env python3
"""Patch all faction hub.html files:
  - Remove .faction-stats block
  - Remove .quick-nav rarity navigation
  - Remove empty rarity sections (no champion cards)
  - Flatten all border-radius to 2px
  - Clean up ::before particle animation
  - Improve visual design
"""
import re
import glob
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
hubs = sorted(glob.glob(os.path.join(ROOT, "pages/factions/faction*/hub.html")))

# ── CSS replacements ──────────────────────────────────────────────────────────
CSS_SUBS = [
    # flatten border-radius
    (r'border-radius:\s*\d+px', 'border-radius: 2px'),
    # remove ::before particle SVG (huge inline noise)
    (r'\.faction-hero::before\s*\{[^}]*\}', ''),
    # remove backdrop-filter (not needed, adds blur cost)
    (r'backdrop-filter:[^;]+;', ''),
    # remove box-shadow glow on faction-logo hover
    (r'filter:\s*drop-shadow\([^)]*rgba\(30, 58, 138[^)]*\)\)', 'filter: none'),
    (r'filter:\s*drop-shadow\([^)]*rgba\(229, 231, 235[^)]*\)\)', 'filter: none'),
    # remove rotate on logo hover
    (r'transform:\s*scale\(1\.05\)\s*rotate\(5deg\)', 'transform: scale(1.04)'),
    # hero title: remove text-shadow glow, use plain color
    (r'text-shadow:\s*0 0 30px rgba\([^)]+\)[^;]*;', ''),
    # champion card hover: no huge lift, no scale
    (r'transform:\s*translateY\(-10px\)\s*scale\(1\.02\)', 'transform: translateY(-4px)'),
    # scrollbar border-radius
    (r'(border-radius:\s*)10px(\s*;)', r'\g<1>2px\2'),
    # nav-pill border-radius
    (r'border-radius:\s*25px', 'border-radius: 2px'),
    # back-to-home border-radius
    (r'border-radius:\s*20px', 'border-radius: 2px'),
    # champion-image border-radius
    (r'border-radius:\s*15px', 'border-radius: 2px'),
    # faction-hero border-radius
    (r'border-radius:\s*20px', 'border-radius: 2px'),
    # faction-stat border-radius
    (r'border-radius:\s*15px', 'border-radius: 2px'),
    # nav-pill hover: remove translateY
    (r'(\.nav-pill:hover[^{]*\{[^}]*)transform:\s*translateY\([^)]+\)[^;]*;', r'\1'),
    # remove shimmer ::before on champion-card
    (r'\.champion-card::before\s*\{[^}]+\}', ''),
    (r'\.champion-card:hover::before\s*\{[^}]+\}', ''),
    # nav-pill box-shadow
    (r'box-shadow:\s*0 10px 25px rgba\(22,\s*163,\s*74,\s*0\.3\)[^;]*;', ''),
    (r'box-shadow:\s*0 8px 20px rgba\(22,\s*163,\s*74,\s*0\.3\)[^;]*;', ''),
    # back-to-home hover box-shadow/translateY
    (r'box-shadow:\s*0 8px 20px rgba\([^)]+\)[^;]*;', ''),
]

# ── HTML block removals ───────────────────────────────────────────────────────
# These are regex patterns for entire HTML blocks to remove

def remove_block(html, start_pattern, end_marker='</div>'):
    """Remove a block starting at start_pattern up through its closing tag."""
    result = []
    i = 0
    while i < len(html):
        m = re.search(start_pattern, html[i:], re.DOTALL)
        if not m:
            result.append(html[i:])
            break
        # append up to match
        result.append(html[i:i + m.start()])
        # find the closing tag by counting depth
        block_start = i + m.start()
        # find opening tag name
        tag_m = re.match(r'<(\w+)', html[block_start:])
        if not tag_m:
            result.append(html[i + m.start():i + m.start() + 1])
            i += m.start() + 1
            continue
        tag = tag_m.group(1)
        depth = 0
        j = block_start
        while j < len(html):
            open_m = re.match(rf'<{tag}[\s>]', html[j:])
            close_m = re.match(rf'</{tag}>', html[j:])
            if open_m:
                depth += 1
                j += open_m.end()
            elif close_m:
                depth -= 1
                j += close_m.end()
                if depth == 0:
                    break
            else:
                j += 1
        # skip any trailing whitespace/newline
        while j < len(html) and html[j] in ' \t\n':
            j += 1
        i = j
    return ''.join(result)

def remove_empty_rarity_sections(html):
    """Remove <section class="rarity-section"> blocks where the champions-grid is empty."""
    # Find sections where champions-grid contains only whitespace/comments
    pattern = r'<section class="rarity-section"[^>]*>.*?</section>'
    def keep_section(m):
        block = m.group(0)
        # Check if champions-grid has any anchor tags (champion cards)
        grid_m = re.search(r'<div[^>]+champions-grid[^>]*>(.*?)</div>', block, re.DOTALL)
        if grid_m:
            inner = grid_m.group(1)
            if re.search(r'<a\s', inner):
                return block  # has champions, keep
        return ''
    return re.sub(pattern, keep_section, html, flags=re.DOTALL)

def patch_hub(path):
    with open(path, encoding='utf-8') as f:
        html = f.read()

    # 1. Remove <div class="particles"></div>
    html = re.sub(r'\s*<div class="particles"></div>', '', html)

    # 2. Remove faction-stats block
    html = remove_block(html, r'<div class="faction-stats"')

    # 3. Remove quick-nav rarity navigation (the one inside .faction-hero)
    # It starts with quick-nav and contains nav-pills with emoji like 🔥 Mythiques
    html = remove_block(html, r'<div class="quick-nav">\s*\n\s*<a href="#mythiques"')

    # 4. Remove empty rarity sections
    html = remove_empty_rarity_sections(html)

    # 5. Remove particle JS function
    html = re.sub(
        r'\s*// Génération des particules.*?createFactionParticles\(\);',
        '',
        html,
        flags=re.DOTALL
    )
    html = re.sub(
        r'\s*function createFactionParticles\(\)[^}]+\}[^}]+\}',
        '',
        html,
        flags=re.DOTALL
    )

    # 6. Remove animateStats function (no longer needed)
    html = re.sub(
        r'\s*// Animation des statistiques\s*\n.*?animateStats\(\);',
        '',
        html,
        flags=re.DOTALL
    )
    html = re.sub(
        r'\s*function animateStats\(\)\s*\{.*?\n        \}',
        '',
        html,
        flags=re.DOTALL
    )

    # 7. Apply CSS substitutions to the <style> block only
    style_m = re.search(r'(<style>)(.*?)(</style>)', html, re.DOTALL)
    if style_m:
        css = style_m.group(2)
        for pat, repl in CSS_SUBS:
            css = re.sub(pat, repl, css)
        # Remove faction-stats CSS block entirely
        css = re.sub(r'\.faction-stats\s*\{[^}]+\}', '', css)
        css = re.sub(r'\.faction-stat\s*\{[^}]+\}', '', css)
        css = re.sub(r'\.stat-number\s*\{[^}]+\}', '', css)
        css = re.sub(r'\.stat-label\s*\{[^}]+\}', '', css)
        # Remove nav-pill duplicate definition (will come from main.css)
        css = re.sub(r'\/\* Navigation rapide \*\/.*?\.nav-pill:hover.*?\}', '', css, flags=re.DOTALL)
        # Remove duplicate quick-nav definition
        css = re.sub(r'\.quick-nav\s*\{[^}]+\}', '', css)
        # Remove back-to-home separate definition - keep it but fix radius
        # Improve rarity-label: make it a clean section divider
        css = re.sub(
            r'\.rarity-header\s*\{[^}]+\}',
            '''.rarity-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1.5rem;
            padding-bottom: 0.6rem;
            border-bottom: 1px solid var(--glass-border);
        }''',
            css
        )
        css = re.sub(
            r'\.rarity-label\s*\{[^}]+\}',
            '''.rarity-label {
            font-family: \'Space Mono\', monospace;
            font-weight: 700;
            font-size: 0.78rem;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            white-space: nowrap;
        }''',
            css
        )
        # Remove float animation (no more particles)
        css = re.sub(r'@keyframes float\s*\{[^}]+\}', '', css)
        html = html[:style_m.start()] + style_m.group(1) + css + style_m.group(3) + html[style_m.end():]

    # 8. Improve rarity-header HTML: add a line after the label
    html = re.sub(
        r'(<div class="rarity-header">)\s*(<span class="rarity-label[^"]*">)(.*?)(</span>)\s*(</div>)',
        r'\1\2\3\4<span class="rarity-line"></span>\5',
        html,
        flags=re.DOTALL
    )

    # 9. Improve faction-hero: remove background animation, simplify
    html = re.sub(
        r'(background: linear-gradient\(135deg,\s*\n\s*rgba\([^)]+\).*?)\nbackdrop-filter:[^;]+;',
        r'\1',
        html,
        flags=re.DOTALL
    )

    # 10. Clean up multiple blank lines
    html = re.sub(r'\n{3,}', '\n\n', html)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Patched: {os.path.relpath(path, ROOT)}")

for hub in hubs:
    try:
        patch_hub(hub)
    except Exception as e:
        print(f"ERROR {hub}: {e}")

print(f"\nDone: {len(hubs)} hubs patched.")
