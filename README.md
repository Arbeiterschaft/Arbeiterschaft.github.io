# Portfolio

A minimal Jekyll site hosted on GitHub Pages. No build step — push markdown, the
site updates.

## Files

```
_config.yml          site title, links, nav menu
_layouts/default.html   the one HTML template every page uses
assets/style.css     all the styling
index.md             home page
projects.md          projects page
writing.md           list of posts (generated automatically)
_posts/              one markdown file per post
```

## Setup (once)

1. Push this folder to a GitHub repo.
   - Name it `<your-username>.github.io` to publish at `https://<your-username>.github.io`.
   - Any other name publishes at `https://<your-username>.github.io/<repo>/` — in
     that case set `baseurl: "/<repo>"` in `_config.yml`.
2. On GitHub: **Settings → Pages → Source: Deploy from a branch → main / (root)**.
3. Edit `_config.yml` and fill in your name, GitHub username, and URL.

First build takes a minute or two. After that, every push is live in ~30 seconds.

## Adding a post

Create `_posts/YYYY-MM-DD-title.md`:

```markdown
---
layout: default
title: My post title
---

Write in Markdown here.
```

The date in the filename orders the list on `/writing/`. Nothing else to update.

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
