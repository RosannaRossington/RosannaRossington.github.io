console.log ("hello");
$(start);

function start(){
  // technologiesPage();
  setupEvents();
}

// function technologiesPage(){
//   return $.each([
//     "#confident",
//     "#learning",
//     "#intrigued"
//   ], function(element, value){
//     $(value).hide();
//   });
// }

function setupEvents(){
  var $confident      = $("#confident");
  // var $learning       = $("#learning");
  // var $intrigued      = $("#intrigued");

  $confident.on("click", showConfident);
  // $learning.on("click", showLearning);
  // $intrigued.on("click", showIntrigued);
}

function showConfident(){
  var $confident      = $("#confident");
  var $confidentTech  = $("#confidentTech");

  $(this).hide();
  $confident.fadeOut("500", function(){
    $confidentTech.show();
  });
}
