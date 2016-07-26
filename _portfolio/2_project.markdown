---
layout: post
title:  Project 2 
description: Mudita
img: /img/blue.jpg
---

A Rails application with PostgreSQL that brings a social aspect to shopping online.
An individual five-day project that allows you to share links to products you think would suit a friend.

<div class="img_row">
	<img class="col one" src="{{ site.baseurl }}/img/portfolio/MuditaHome.png" alt="" title="example image"/>
	<img class="col one" src="{{ site.baseurl }}/img/portfolio/MuditaUser.png" alt="" title="example image"/>
	<img class="col one" src="{{ site.baseurl }}/img/portfolio/MuditaRec.png" alt="" title="example image"/>
</div>
<div class="img_row">
  <img class="col three" src="{{ site.baseurl }}/img/portfolio/MuditaInbox.png" alt="" title="example image"/>
</div>
<div class="img_row">
  <img class="col three" src="{{ site.baseurl }}/img/portfolio/MuditaInbox2.png" alt="" title="example image"/>
</div>
<div class="col three caption">
</div>
  Functionality

  See something that would look great on a friend. Find a username paste in a product page URL. Send and check your Inbox too to see what recommendations you have and upload a picture wearing your new purchase.
<div class="img_row">
	<img class="col three" src="{{ site.baseurl }}/img/portfolio/MuditaWelcome.png" alt="" title="example image"/>
</div>
<div class="col three caption">
	
</div>
Technologies 

A Ruby on Rails application that uses the Devise gem to setup an authentication process to register, login and log out users (creating and destroying sessions). Created a PostgreSQL database performing SQL queries, to list and register users, create recommendations and add comments. Managed the creation of tables and alterations using migrations to add functionality such as user profile images and comments to recommendation feeds. The Carrierwave gem allows users to upload a profile picture, with a default image loaded if the user chooses not to, and style pictures in the feed too. The main functionality is due to the Gastly gem that takes screenshots of web pages using built-in Phantom.js and MiniMagick to scrape the inputted URL. The application customises templates from Foundation styled using SCSS and SASS with JavaScript and jQuery to add style features too.


<!-- <div class="img_row">
	<img class="col two" src="{{ site.baseurl }}/img/6.jpg" alt="" title="example image"/>
	<img class="col one" src="{{ site.baseurl }}/img/11.jpg" alt="" title="example image"/>
</div>
<div class="col three caption">
</div> -->


<br/><br/><br/>


Links

[GitHub](https://github.com/RosannaRossington/wdi-project-2)

[Mudita](https://the-mudita.herokuapp.com/)
