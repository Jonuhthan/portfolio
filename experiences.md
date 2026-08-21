---
layout: page
title: Experiences
---

<div class="experience-list">
{% for experience in site.data.experience %}
  {% include experience-card.html experience=experience %}
{% endfor %}
</div>
