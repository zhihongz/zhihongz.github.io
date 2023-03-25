---
layout: page
permalink: /repositories/
title: Repositories
description: My GitHub profile and some repositories.
nav: true
nav_order: 5
---

### GitHub Profile

{% if site.data.repositories.github_users %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.html username=user %}
  {% endfor %}
</div>
{% endif %}

---
<br/>

### GitHub Repositories

<!-- ## GitHub Repositories

{% if site.data.repositories.github_repos %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.html repository=repo %}
  {% endfor %}
</div>
{% endif %} -->


{% if site.data.repositories.github_repos %}
{% for item in site.data.repositories.github_repos %}
##### {{item.topic}}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
    {% for repo in item.repos %}
      {% include repository/repo.html repository=repo %}
    {% endfor %}
  </div>
  ---
{% endfor %}
{% endif %}