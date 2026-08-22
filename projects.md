---
layout: page
title: Projects
permalink: /projects/
---

<ul class="other-projects">
{% for project in site.data.projects %}
  {% if project.featured %}
  {% include project-card.html project=project %}
  {% endif %}
{% endfor %}
</ul>

<h2 class="section-heading">Older Projects</h2>
<ul class="other-projects">
{% for project in site.data.projects %}
  {% unless project.featured %}
  {% include project-card.html project=project %}
  {% endunless %}
{% endfor %}
</ul>
