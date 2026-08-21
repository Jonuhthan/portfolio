---
layout: page
title: Projects
permalink: /projects/
---

<div class="project-list">
{% for project in site.data.projects %}
  {% if project.featured %}
  {% include project-card.html project=project %}
  {% endif %}
{% endfor %}
</div>

<h2 class="section-heading">Older Projects</h2>
<div class="project-list">
{% for project in site.data.projects %}
  {% unless project.featured %}
  {% include project-card.html project=project %}
  {% endunless %}
{% endfor %}
</div>
