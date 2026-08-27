---
layout: default
title: Home
---

# Jilu Wang

Student at the University of Pennsylvania. One or two sentences about what you
work on and what you're looking for. Keep it short — this is the first thing
people read.

- **Studying:** your program, UPenn
- **Interested in:** topic one, topic two, topic three
- **Contact:** [{{ site.email }}](mailto:{{ site.email }})

## Recent writing

<ul class="list">
  {% for post in site.posts limit: 5 %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span class="date">{{ post.date | date: "%b %Y" }}</span>
  </li>
  {% endfor %}
</ul>

[All writing →]({{ '/writing/' | relative_url }})
