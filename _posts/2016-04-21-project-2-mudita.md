---
layout: post
title: Project 2 WDI | Mudita
date: 2016-05-06
tags: english
category: blog
---
-----------

A Rails application with PostgreSQL that brings a social aspect to shopping online.
An individual five-day project that allows you to share links to products you think would suit a friend.

![Mudita](./assets/img/blog/MuditaInbox.png)

Functionality
-----------
See something that would look great on a friend. Find a username paste in a product page URL. Send and check your Inbox too to see what recommendations you have and upload a picture wearing your new purchase.

Technologies
-----------
A Ruby on Rails application that uses the Devise gem to setup an authentication process to register, login and log out users (creating and destroying sessions). Created a PostgreSQL database performing SQL queries, to list and register users, create recommendations and add comments. Managed the creation of tables and alterations using migrations to add functionality such as user profile images and comments to recommendation feeds. The Carrierwave gem allows users to upload a profile picture, with a default image loaded if the user chooses not to, and style pictures in the feed too. The main functionality is due to the Gastly gem that takes screenshots of web pages using built-in Phantom.js and MiniMagick to scrape the inputted URL. The application customises templates from Foundation styled using SCSS and SASS with JavaScript and jQuery to add style features too.

Links
-----------
[GitHub](https://github.com/RosannaRossington/wdi-project-2)
[Mudita](https://the-mudita.herokuapp.com/)
