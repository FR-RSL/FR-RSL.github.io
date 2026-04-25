import os
import shutil
import sys

def create_sites_from_images(tmp_dir, target_path):
    for filename in os.listdir(tmp_dir):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.webp')):
            name, ext = os.path.splitext(filename)
            site_dir = os.path.join(target_path, name.lower())
            assets_dir = os.path.join(site_dir, 'assets')
            os.makedirs(assets_dir, exist_ok=True)
            shutil.copy2(os.path.join(tmp_dir, filename), os.path.join(assets_dir, filename))
            html_path = os.path.join(site_dir, f"{name.lower()}.html")
            js_path = os.path.join(site_dir, f"{name.lower()}.js")
            with open(js_path, "w", encoding="utf-8") as f:
                f.write(f"""<!DOCTYPE html>
<html>
<head>
    <title>{name}</title>
</head>
<body>
    <img src=\"assets/{filename}\" alt=\"{name}\">
</body>
</html>
""")
            with open(html_path, "w", encoding="utf-8") as f:
                f.write(f"""<!DOCTYPE html>
<html>
<head>
    <title>{name}</title>
</head>
<body>
    <img src=\"assets/{filename}\" alt=\"{name}\">
</body>
</html>
""")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python autocreate.py /tmp chemin/cible/")
        sys.exit(1)
    tmp_dir = sys.argv[1]
    target_path = sys.argv[2]
    create_sites_from_images(tmp_dir, target_path)
