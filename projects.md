---
layout: page
title: Projects
---

<div class="project-list">
{% for project in site.data.projects %}
  {% include project-card.html project=project %}
{% endfor %}
</div>
