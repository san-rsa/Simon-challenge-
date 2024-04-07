
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];
var started = false;
var level = 0;

$(document).keypress(function() {
  if(!started) {
    $("#level-title").text("level" + level);
    nextSequence();
    started= true;
  }
})

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  playSounds(userChosenColour);
  animatePress(userChosenColour);
checkAnswer(userClickedPattern.length-1);
  // console.log(userClickedPattern);

});



// function 

function checkAnswer(currentlevel) {
  if (gamePattern[currentlevel] === userClickedPattern[currentlevel]) {0
   if (gamePattern.length === userClickedPattern.length) {
     setTimeout(function() {
       nextSequence()
     }, 1000);
   }
  } else {
    playSounds("wrong");

    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 500)

    $("#level-title").text("Game Over, Press Any Key to Restart");

    startOver();
  }
}



function nextSequence() {
  userClickedPattern = [];
level++;
  $("#level-title").text("level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(300).fadeOut(300).fadeIn(300);

playSounds(randomChosenColour);
  
}

function playSounds(name) {

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}

function animatePress(currentcolour) {
  $("#" + currentcolour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentcolour).removeClass("pressed");
  }, 400)
}

function startOver(params) {
  started = false
  gamePattern = [];
  level = 0;
  
}