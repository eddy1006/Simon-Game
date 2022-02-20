
var count = 0;
var arr = [];
var user = [];

$(document).keypress(function(event){
  if(event.key === 'a' && count === 0){
      newLevel();
  }
})


function newLevel(){
  count++;
  $("h1").text("Level " +count);
  var button = Math.floor(Math.random()*4);
  switch(button){
    case 0:
    arr.push("red");
    clickAnim("red");
    break;
    case 1:
    arr.push("blue");
    clickAnim("blue");
    break;
    case 2:
    arr.push("yellow");
    clickAnim("yellow");
    break;
    case 3:
    arr.push("green");
    clickAnim("green");
    break;
  }
}

$(".btn").on("click",function(){
  var color = this.id;
  userClick(color);
  if(this.id === arr[user.length]){
    user.push(this.id);
    if(user.length === arr.length){
      console.log("pattern match");
      user = [];
      newLevel();
    }
  }else{
    console.log("reset");
    $("h1").text("Game over! Press A to restart");
    wrongClick();
    count = 0;
    arr= [];
    user = [];
  }
})

function clickAnim(color){
  $("."+color).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/"+color+".mp3");
  audio.play();
}

function wrongClick(){
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");
  },200)
  var audio = new Audio("sounds/wrong.mp3")
  audio.play();
}

function userClick(color){
  $("#"+color).addClass("pressed");
  setTimeout(function (){
    $("#"+color).removeClass("pressed");
    console.log(color)
  },100);
  var audio = new Audio("sounds/"+color+".mp3");
  audio.play();
}
