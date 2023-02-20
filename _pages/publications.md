---
layout: page
permalink: /publications/
title: Publications
description: "ᐪ equal contribution, * corresponding author."
years: [2023, 2022, 2021]
nav: true
nav_order: 1
---
<!-- publications in reversed chronological order -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>



<!-- publications by categories in reversed chronological order -->
<!--ref: https://github.com/yikang-li/yikang-li.github.io  -->

