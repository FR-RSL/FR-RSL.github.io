import os, glob, re

base = '/home/pboucher/Perso/FR-RSL.github.io/pages/factions'
html_files = glob.glob(os.path.join(base, '**', '*.html'), recursive=True)

old_html = []
for f in html_files:
    if 'hub.html' in f:
        continue
    with open(f, encoding='utf-8') as fh:
        content = fh.read()
    if 'champion-runtime' not in content and re.search(r'<script src="[^"]*\.js">', content):
        old_html.append(f)

print("Old HTML files needing fix:", len(old_html))

fixed = 0
for f in old_html:
    with open(f, encoding='utf-8') as fh:
        content = fh.read()

    # Determine rarity from path
    rarity = 'legendary'
    if '/mythical/' in f:
        rarity = 'mythical'

    runtime_src = '../../../../../assets/js/champion-runtime-' + rarity + '.js'

    # Find the last </script> before </body>
    # The pattern is: ...constant.js"></script><script src="X.js"></script>
    # We need to add the runtime script after the last </script> before </body>

    # Replace the last occurrence of </script> before </body> by adding the runtime
    # Pattern: last script tag closing before </body>
    body_close = content.rfind('</body>')
    if body_close == -1:
        print("WARNING no </body> in", f)
        continue

    last_script_end = content.rfind('</script>', 0, body_close)
    if last_script_end == -1:
        print("WARNING no </script> in", f)
        continue

    insert_pos = last_script_end + len('</script>')
    runtime_tag = '\n  <script src="' + runtime_src + '"></script>'

    new_content = content[:insert_pos] + runtime_tag + content[insert_pos:]

    # Remove duplicate </body></html> if any
    # Keep only the LAST </body></html>
    while new_content.count('</body>') > 1:
        idx = new_content.rfind('</body>')
        first_body = new_content.index('</body>')
        # Remove the first one and everything between first and last, keep last
        new_content = new_content[:first_body] + new_content[idx:]

    while new_content.count('</html>') > 1:
        idx = new_content.rfind('</html>')
        first_html = new_content.index('</html>')
        new_content = new_content[:first_html] + new_content[idx:]

    with open(f, 'w', encoding='utf-8') as fh:
        fh.write(new_content)
    fixed += 1

print("Fixed:", fixed, "files")
