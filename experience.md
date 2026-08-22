---
layout: page
title: Experience
permalink: /experience/
---

<ul class="other-projects">
{% for exp in site.data.experience %}
  {% include experience-card.html exp=exp %}
{% endfor %}
</ul>
