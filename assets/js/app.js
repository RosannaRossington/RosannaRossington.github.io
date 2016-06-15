console.log ("hello");

$(start);

function start(){
  technologiesPage();
  setupEvents();
  portfolioPage();
}

function technologiesPage(){
  return $.each([
    "#understanding"
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
  var $understanding  = $("#understanding");
  var $confidentTech  = $("#confidentTech");

  $(this).hide();
  $understanding.fadeOut("100", function(){
    $confidentTech.show();
  });
}

function showLearning(){
  var $understanding  = $("#understanding");
  var $learningTech  = $("#learningTech");

  $(this).hide();
  $understanding.fadeOut("100", function(){
    $learningTech.show();
  });
}

function showIntrigued(){
  var $understanding  = $("#understanding");
  var $intriguedTech  = $("#intriguedTech");

  $(this).hide();
  $understanding.fadeOut("500", function(){
    $intriguedTech.show();
  });
}

function portfolioPage(){
  return $.each([
    "#titles"
  ], function(element, value){
    $(value).show();
  });
}
