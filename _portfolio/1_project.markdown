---
layout: post
title: Project 1 
description: What colour is the text?
img: /assets/img/red.jpg
---
What colour is the text?

An individual four-day project that tests the brain using colours and distractions to force you to think hard in a limited time period before you give your answer.

<div class="img_row">
  <img class="col three" src="{{ site.baseurl }}/assets/img/portfolio/Project1a.png" alt="" title="levels"/>
</div>
<div class="col three caption">
A single page JavaScript game application to keep your mind sharp. 
</div>

<div class="img_row">
  <img class="col one" src="{{ site.baseurl }}/assets/img/portfolio/level_3.png" alt="" title="home"/>
  <img class="col one" src="{{ site.baseurl }}/assets/img/portfolio/level_4.png"  alt="" title="levels"/>
  <img class="col one" src="{{ site.baseurl }}/assets/img/portfolio/score.png" alt="" title="example"/>
</div>
<div class="col three caption">
	Each level increases in difficulty, introducing added distraction to level three and an additional background colour in level four.

</div>

Functionality

A four level brain test game. On click the user is shown two buttons that each contain a colour. The user has to click the colour of the text not the text. Each level displays the round for between two and a half – three seconds. The user's score is displayed after ten rounds and logs if the user is correct, incorrect or not fast enough. Introducing added distraction to level three and an additional background colour in level four.

<div class="img_row">
  <img class="col three" src="{{ site.baseurl }}/assets/img/portfolio/Project1_levels.png" alt="" title="levels"/>
</div>
<div class="col three caption">
  Each level displays the round for between two and a half – three seconds.
</div>


Technologies

A single page JavaScript application using jQuery methods to hide and show HTML elements depending on the users input. The library also allows the execution of a new round after a set interval depending on the level, the three HTML elements per round are created using a random generator function. Animate CSS adds styling and distractions to the game in level 3 and a counter loop keeps score and limits the levels to ten rounds.

Links

[What colour is the text?](https://what-colour.herokuapp.com/)

[GitHub](https://github.com/RosannaRossington/wdi-project-1)
