var bg;
var sleep;
var brush;
var gym;
var eat;
var drink;
var move;


function preload(){
  bg= loadImage("images/iss.png");
  sleep = loadImage("images/sleep.png");
  brush = loadImage("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  drink  = loadAnimation("images/drink1.png","images/drink2.png");
  move = loadAnimation("images/move1.png","images/move.png");
}

function setup() {
  createCanvas(400, 400);
 
 astronaut = createSprite(300,230);
 astronaut.addAnimation("sleeping" , sleep)
 astronaut.scale = 0.1;

}



function draw() {
  background(220);
  
  if(keyCode==="UP_ARROW"){
    astronaut.addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing");
    astronaut.velocityX  = 0;
    astronaut.velocityY = 0;
  }
}






