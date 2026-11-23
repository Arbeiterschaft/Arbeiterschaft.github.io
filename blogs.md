---
title: Blogs
permalink: /blogs/
---

# Blogs

{% assign posts = site.blogs | sort: "date" | reverse %}
<ul class="list">
  {% for post in posts %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span class="date">{{ post.date | date: "%b %-d, %Y" }}</span>
  </li>
  {% endfor %}
</ul>
{% if posts.size == 0 %}<p class="meta">Nothing here yet.</p>{% endif %}
