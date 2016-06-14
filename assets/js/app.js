console.log ("hello");

$(start);

function start(){
  technologiesPage();
  setupEvents();
}

function technologiesPage(){
  return $.each([
    "#confident",
    "#learning",
    "#intrigued"
  ], function(element, value){
    $(value).show();
  });
}

function setupEvents(){
  var $confident      = $("#confident");
  var $learning       = $("#learning");
  var $intrigued      = $("#intrigued");
  var $skills         = $("#skills");

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
  $understanding.fadeOut("500", function(){
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
