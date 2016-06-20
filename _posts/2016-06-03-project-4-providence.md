---
layout: post
title: Project 4 WDI | Providence
date: 2016-06-03
tags: english
category: blog
---

-----------

An AngularJS application with an Express backend using Nike’s [MSI](http://msi.apparelcoalition.org/#/) database.

An independent six-day project to raise awareness regarding the environmental impact of materials used in products on Net-a-Porter.com.

Functionality
-----------

Browse Net-a-Porter.com.
Register.
Log In.
Copy and paste the product page URL into Providence and see what material the product is made from and the sustainability score in four key areas of those materials.


Technologies
---------
Using Bower and Grunt the application is set up using Passport authentication strategy  and JWT tokens.  A Jake request is set up to request specific fields for each material saved in the MSI database. On input the application scrapes the product page of the URL using Cheerio and pulls the information that is saved on the same line as %, the data is “cleaned” and then cross-referenced using Regex to return the sustainability score for the materials used to produce the product.

Links
----

[Providence](https://the-providence.herokuapp.com/) | 
[GitHub](https://github.com/RosannaRossington/wdi-project-4)
