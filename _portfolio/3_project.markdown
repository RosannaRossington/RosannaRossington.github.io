---
layout: post
title:  Project 3 WDI 
description: Mudita
img:
<!-- redirect: https://unsplash.com -->
---

A MEN stack application that aims to display data from the Police API in an easily accessible and visually appealing manner.
A three person six-day group project to raise awareness of the type of crime, location and status of the criminal activity in London.

	---
	layout: post
	title: Project
	description: a project with a background image
	img: /img/12.jpg
	---


<div class="img_row">
	<img class="col one" src="{{ site.baseurl }}/img/1.jpg" alt="" title="example image"/>
	<img class="col one" src="{{ site.baseurl }}/img/2.jpg" alt="" title="example image"/>
	<img class="col one" src="{{ site.baseurl }}/img/3.jpg" alt="" title="example image"/>
</div>
<div class="col three caption">
	Functionality

	Register. Log In. Use the crime selection filter to see icons appear across London. A visually accessible representation of crimes and prison locations. A slide out dashboard provides detailed crime information, street view and stats about crimes in the area. Select a prison and a route will map a journey from the crime to the prison.
</div>
<div class="img_row">
	<img class="col three" src="{{ site.baseurl }}/img/5.jpg" alt="" title="example image"/>
</div>
<div class="col three caption">
	This image can also have a caption. It's like magic. 
</div>
Built on a MEN stack JavaScript framework using Bower LondonVice uses JWT Authentication supported by Passport.io to ensure users are saved securely in the database. This application makes a Jake request to the London PoliceAPI about crimes that took place in February 2015 and loops through to display every five hundredth crime on the map of London. On click of each crime icon a slide out dashboard provides extra information. Set up using the Google Map API this enables the application to include StreetView and by utilising the API’s Direction Service and Geometry Library libraries the user can see a route from crime to prison too. Highcharts was used to set up interactive charts to visually represent crimes in a specific radius of the selected crime. LondonVice uses Snazzy Maps and customises Bootstrap templates using CSS and icons from Noun Project.


<div class="img_row">
	<img class="col two" src="{{ site.baseurl }}/img/6.jpg" alt="" title="example image"/>
	<img class="col one" src="{{ site.baseurl }}/img/11.jpg" alt="" title="example image"/>
</div>
<div class="col three caption">
	You can also have artistically styled 2/3 + 1/3 images, like these.
</div>


<br/><br/><br/>


A Rails application with PostgreSQL that brings a social aspect to shopping online.
An individual five-day project that allows you to share links to products you think would suit a friend.
