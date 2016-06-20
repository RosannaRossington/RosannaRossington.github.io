$(start);

function start(){
  technologiesPage();
  setupEvents();
  portfolioPage();
}

function technologiesPage(){
  return $.each([
    "#understanding",
    "#gaIntro",
    "#titles"
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
  var $learning       = $("#learning");
  var $intrigued      = $("#intrigued");
  var $understanding  = $("#understanding");

  var $confidentTech  = $("#confidentTech");
  var $learningTech   = $("#learningTech");
  var $intriguedTech  = $("#intriguedTech");
  var $gaIntro        = $("#gaIntro");

  var $intriguedTitle = $("#intriguedTitle");
  var $confidentTitle = $("#confidentTitle");
  var $learningTitle  = $("#learningTitle");

  $(this).hide();
  $confident.fadeOut("100", function(){
    $learningTech.hide();
    $intriguedTech.hide();
    $confidentTech.show();

    $learning.show();
    $intrigued.show();

    $intriguedTitle.hide();
    $confidentTitle.show();
    $learningTitle.hide();
  });
}

function showLearning(){
  var $confident      = $("#confident");
  var $learning       = $("#learning");
  var $intrigued      = $("#intrigued");

  var $understanding  = $("#understanding");
  var $confidentTech  = $("#confidentTech");
  var $learningTech   = $("#learningTech");
  var $intriguedTech  = $("#intriguedTech");

  var $intriguedTitle = $("#intriguedTitle");
  var $confidentTitle = $("#confidentTitle");
  var $learningTitle  = $("#learningTitle");

  $(this).hide();
  $learning.fadeOut("100", function(){
    $learningTech.show();
    $intriguedTech.hide();
    $confidentTech.hide();
    $confident.show();
    $intrigued.show();
    $intriguedTitle.hide();
    $confidentTitle.hide();
    $learningTitle.show();
  });
}

function showIntrigued(){
  var $confident      = $("#confident");
  var $learning       = $("#learning");
  var $intrigued      = $("#intrigued");
  var $understanding  = $("#understanding");

  var $confidentTech  = $("#confidentTech");
  var $learningTech   = $("#learningTech");
  var $intriguedTech  = $("#intriguedTech");

  var $intriguedTitle = $("#intriguedTitle");
  var $confidentTitle = $("#confidentTitle");
  var $learningTitle  = $("#learningTitle");

  $(this).hide();
  $intrigued.fadeOut("500", function(){
    $learningTech.hide();
    $intriguedTech.show();
    $confidentTech.hide();
    $confident.show();
    $learning.show();
    $intriguedTitle.show();
    $confidentTitle.hide();
    $learningTitle.hide();
  });
}

function portfolioPage(){
  return $.each([
    "#titles"
  ], function(element, value){
    $(value).show();
  });
}
