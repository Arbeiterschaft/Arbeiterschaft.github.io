# Portfolio

A minimal Jekyll site hosted on GitHub Pages. No build step — push markdown, the
site updates.

## Files

```
_config.yml              site title, links, top-bar menu
_layouts/default.html    the one HTML template every page uses
_includes/card-grid.html the picture-card grid (home, Projects, Interests)
_includes/media.html     shows an image or a video, picked by file extension
assets/media.js          lazy-loads videos and pauses them when off screen
assets/style.css         all styling — the SETTINGS block at the top (colors, fonts) restyles the site
index.md                 home page: photo + intro text, then project cards
projects.md              /projects/  — project cards
blogs.md                 /blogs/     — list of blog posts
interests.md             /interests/ — interest cards
_projects/               one markdown file per project
_blogs/                  one markdown file per blog post
_interests/              one markdown file per interest
pics/                    images and videos (one folder per item)
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
- `cover` can be an image (`.gif`, `.jpg`, `.jpeg`, `.png`, `.webp`) or a video
  (`.mp4`, `.webm`), e.g. `cover: /pics/My_project/demo.mp4`. See *Images and videos* below.
- `date` sets the order: newest first.
- The file name becomes the URL, e.g. `_projects/IROS_race.md` → `/projects/IROS_race/`.

## Images and videos

The site picks how to show a file from its extension:

| Extension | Shown as |
|---|---|
| `.gif` `.jpg` `.jpeg` `.png` `.webp` | image |
| `.mp4` `.webm` | video: plays on its own, loops, muted, no controls |

Inside a page, images and videos are centered and at most `--media-max-width` wide
(720px, set in the SETTINGS block of `assets/style.css`). On cards, videos use the same size, crop and border as images. They only download when
they come near the screen, and they pause when you scroll away.

**Card cover:** set `cover:` in the front matter to an image or video path.

**Inside a page:** Markdown image syntax works for images:

```markdown
![race](/pics/IROS_race/race1.gif)
```

For a video (or an image), use the include instead. Markdown `![]()` can't show a video:

```markdown
{% include media.html src="/pics/IROS_race/demo.mp4" alt="Overtaking run" %}
```

Tip: an MP4 is usually 5–10× smaller than the same clip as a GIF. To convert:
`ffmpeg -i clip.gif -movflags +faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" clip.mp4`

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

## Videos
```
ffplay video.mp4
ffmpeg -i Dji.mp4 -c:v copy -an -movflags +faststart Dji_web.mp4

```

Then open http://localhost:4000.
