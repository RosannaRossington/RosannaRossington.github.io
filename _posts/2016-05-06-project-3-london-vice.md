---
layout: post
title: Project 3 WDI | LondonVice
date: 2016-05-06
tags: english
category: blog
---
-----------

A MEN stack application that aims to display data from the Police API in an easily accessible and visually appealing manner.
A three person six-day group project to raise awareness of the type of crime, location and status of the criminal activity in London.

Functionality
-----------
 Register. Log In. Use the crime selection filter to see icons appear across London. A visually accessible representation of crimes and prison locations. A slide out dashboard provides detailed crime information, street view and stats about crimes in the area. Select a prison and a route will map a journey from the crime to the prison.

Technologies
-----------
 Built on a MEN stack JavaScript framework using Bower LondonVice uses JWT Authentication supported by Passport.io to ensure users are saved securely in the database. This application makes a Jake request to the London PoliceAPI about crimes that took place in February 2015 and loops through to display every five hundredth crime on the map of London. On click of each crime icon a slide out dashboard provides extra information. Set up using the Google Map API this enables the application to include StreetView and by utilising the API’s Direction Service and Geometry Library libraries the user can see a route from crime to prison too. Highcharts was used to set up interactive charts to visually represent crimes in a specific radius of the selected crime. LondonVice uses Snazzy Maps and customises Bootstrap templates using CSS and icons from Noun Project.

 Links
 -----------
 [LondonVice   ](https://london-vice.herokuapp.com/)
 [   GitHub](https://github.com/RosannaRossington/wdi-project-3)
