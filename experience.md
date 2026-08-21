---
layout: page
title: Experience
permalink: /experience/
---

<ul class="other-projects">
{% for exp in site.data.experience %}
  <li>
    <div class="project-header">
      <span class="project-name">{{ exp.title }}</span>
      <span class="exp-dates">{{ exp.dates }}</span>
    </div>
    <div class="exp-org">
      {% if exp.org_url %}<a href="{{ exp.org_url }}" target="_blank" rel="noopener">{{ exp.org }}</a>{% else %}{{ exp.org }}{% endif %}
      {% if exp.location %}<span class="exp-location">· {{ exp.location }}</span>{% endif %}
    </div>
    {% if exp.blurb %}<p class="exp-blurb">{{ exp.blurb }}</p>{% endif %}
    {% if exp.stack %}<div class="project-stack">{{ exp.stack }}</div>{% endif %}
  </li>
{% endfor %}
</ul>
