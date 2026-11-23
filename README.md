# Portfolio

A minimal Jekyll site hosted on GitHub Pages. No build step — push markdown, the
site updates.

## Files

```
_config.yml              site title, links, top-bar menu
_layouts/default.html    the one HTML template every page uses
_includes/card-grid.html the picture-card grid (home, Projects, Interests)
assets/style.css         all styling — the SETTINGS block at the top (colors, fonts) restyles the site
index.md                 home page: photo + intro text, then project cards
projects.md              /projects/  — project cards
blogs.md                 /blogs/     — list of blog posts
interests.md             /interests/ — interest cards
_projects/               one markdown file per project
_blogs/                  one markdown file per blog post
_interests/              one markdown file per interest
pics/                    images (one folder per item)
```

## Setup (once)

1. Push this folder to a GitHub repo.
   - Name it `<your-username>.github.io` to publish at `https://<your-username>.github.io`.
   - Any other name publishes at `https://<your-username>.github.io/<repo>/` — in
     that case set `baseurl: "/<repo>"` in `_config.yml`.
2. On GitHub: **Settings → Pages → Source: Deploy from a branch → main / (root)**.
3. Edit `_config.yml` and fill in your name, GitHub username, and URL.

First build takes a minute or two. After that, every push is live in ~30 seconds.

## Adding a project / blog / interest

Create a file in `_projects/`, `_blogs/` or `_interests/` that starts with:

```markdown
---
title: My project
summary: One-sentence intro shown under the card.
cover: /pics/My_project/cover.gif
date: 2026-09-01
published: true   # switch: true = shown, false = hidden
---

Write in Markdown here.
```

- **The switch:** `published: false` hides the item everywhere and doesn't build its page.
  Set it to `true` when the item is ready.
- `summary` and `cover` are used on cards (blogs only need `title` and `date`).
  A card without a cover shows an empty box.
- `date` sets the order: newest first.
- The file name becomes the URL, e.g. `_projects/IROS_race.md` → `/projects/IROS_race/`.

## Changing the home page text

Edit the text between the `<div class="intro-text">` lines in `index.md`.
The photo is `pics/pfp.jpg`.

## Changing colors and fonts

Edit the `SETTINGS` block at the top of `assets/style.css` (colors, font, text sizes).

## Adding a page

Create `about.md` in the root:

```markdown
---
layout: default
title: About
permalink: /about/
---

Content here.
```

Then add it to the `nav:` list in `_config.yml` so it appears in the menu.

## Preview locally (optional)

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.
