---
layout: post
title: Project 4
description: Providence
img: /img/green.jpg
---

An AngularJS application with an Express backend using Nike’s [MSI database.](http://msi.apparelcoalition.org/#/)

An independent six-day project to raise awareness regarding the environmental impact of materials used in products on Net-a-Porter.com.

<div class="img_row">
	<img class="col one" src="{{ site.baseurl }}/img/portfolio/Providence.png" alt="" title="example image"/>
	<img class="col one" src="{{ site.baseurl }}/img/portfolio/Providence2.png" alt="" title="example image"/>
	<img class="col one" src="{{ site.baseurl }}/img//portfolio/Providence3.png" alt="" title="example image"/>
</div>
<div class="col three caption">
</div>
<!-- <div class="img_row">
	<img class="col three" src="{{ site.baseurl }}/img/5.jpg" alt="" title="example image"/>
</div>
<div class="col three caption">
	This image can also have a caption. It's like magic. 
</div> -->

Functionality

Browse Net-a-Porter.com.
Register.
Log In.
Copy and paste the product page URL into Providence and see what material the product is made from and the sustainability score in four key areas of those materials.


<!-- <div class="img_row">
	<img class="col two" src="{{ site.baseurl }}/img/6.jpg" alt="" title="example image"/>
	<img class="col one" src="{{ site.baseurl }}/img/11.jpg" alt="" title="example image"/>
</div>
<div class="col three caption">
	You can also have artistically styled 2/3 + 1/3 images, like these.
</div> -->


<br/><br/><br/>

Technologies
---------
Using Bower and Grunt the application is set up using Passport authentication strategy  and JWT tokens.  A Jake request is set up to request specific fields for each material saved in the MSI database. On input the application scrapes the product page of the URL using Cheerio and pulls the information that is saved on the same line as %, the data is “cleaned” and then cross-referenced using Regex to return the sustainability score for the materials used to produce the product.

Links
-----------

[Providence   ](https://the-providence.herokuapp.com/)
[   GitHub](https://github.com/RosannaRossington/wdi-project-4)


