$(start);

function start(){
  technologiesPage();
  setupEvents();
  portfolioPage();
}

function technologiesPage(){
  return $.each([
    "#understanding",
    "#gaIntro"
  ], function(element, value){
    $(value).show();
  });
}

function setupEvents(){
  var $confident      = $("#confident");
  var $learning       = $("#learning");
  var $intrigued      = $("#intrigued");

  var $confidentTech  = $("#confidentTech");
  var $learningTech   = $("#learningTech");
  var $intriguedTech  = $("#intriguedTech");

  $confident.on("click", showConfident);
  $learning.on("click", showLearning);
  $intrigued.on("click", showIntrigued);

  $confidentTech.hide();
  $learningTech.hide();
  $intriguedTech.hide();
}

function showConfident(){
  var $confident      = $("#confident");
  var $understanding  = $("#understanding");
  var $confidentTech  = $("#confidentTech");
  var $learningTech   = $("#learningTech");
  var $intriguedTech  = $("#intriguedTech");
  var $gaIntro        = $("#gaIntro");

  $(this).hide();
  $confident.fadeOut("100", function(){
    $learningTech.hide();
    $intriguedTech.hide();
    $confidentTech.show();
    $gaIntro.hide();
    $understanding.show();
  });
}

function showLearning(){
  var $learning       = $("#learning");
  var $understanding  = $("#understanding");
  var $confidentTech  = $("#confidentTech");
  var $learningTech   = $("#learningTech");
  var $intriguedTech  = $("#intriguedTech");
  var $gaIntro        = $("#gaIntro");

  $(this).hide();
  $learning.fadeOut("100", function(){
    $learningTech.show();
    $intriguedTech.hide();
    $confidentTech.hide();
    $gaIntro.hide();
    $understanding.show();
  });
}

function showIntrigued(){
  var $intrigued      = $("#intrigued");
  var $understanding  = $("#understanding");
  var $confidentTech  = $("#confidentTech");
  var $learningTech   = $("#learningTech");
  var $intriguedTech  = $("#intriguedTech");
  var $gaIntro        = $("#gaIntro");

  $(this).hide();
  $intrigued.fadeOut("500", function(){
    $learningTech.hide();
    $intriguedTech.show();
    $confidentTech.hide();
    $gaIntro.hide();
    $understanding.show();
  });
}

function portfolioPage(){
  return $.each([
    "#titles"
  ], function(element, value){
    $(value).show();
  });
}
