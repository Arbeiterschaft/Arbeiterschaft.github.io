---
title: Home
---

<section class="intro">
  <img class="avatar" src="{{ '/pics/pfp.jpg' | relative_url }}" alt="{{ site.title }}">
  <div class="intro-text" markdown="1">

<!-- ✏️ Edit the text below freely (normal Markdown). -->

Student at the University of Pennsylvania. One or two sentences about what you
work on and what you're looking for. Keep it short — this is the first thing
people read.

- **Studying:** your program, UPenn
- **Interested in:** topic one, topic two, topic three
- **Contact:** [{{ site.email }}](mailto:{{ site.email }})

</div>
</section>

## Projects

{% include card-grid.html items=site.projects %}
