
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
  var button = Math.floor(Math.random()*4);
  switch(button){
    case 0:
    arr.push("red");
    $(".red").css("background-color","black")
    setTimeout(function(){
      $(".red").css("background-color","red");
    },1000)
    break;
    case 1:
    arr.push("blue");
    $(".blue").css("background-color","black")
    setTimeout(function(){
      $(".blue").css("background-color","blue");
    },1000)
    break;
    case 2:
    arr.push("yellow");
    $(".yellow").css("background-color","black")
    setTimeout(function(){
      $(".yellow").css("background-color","yellow");
    },1000)
    break;
    case 3:
    arr.push("green");
    $(".green").css("background-color","black")
    setTimeout(function(){
      $(".green").css("background-color","green");
    },1000)
    break;
  }
}

$(".btn").on("click",function(){
  if(this.id == arr[user.length]){
    user.push(this.id);
    if(user.length === arr.length){
      console.log("pattern match");
      user = [];
      newLevel();
    }
  }else{
    console.log("reset");
    count = 0;
    arr= [];
    user = [];
  }
})
