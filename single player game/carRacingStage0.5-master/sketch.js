var car1,car2,car3,car4;
var cars;
var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allPlayers;
var track,car1img,car2img,car3img,car4img;
var Lives=2;
function preload(){
  car1img=loadImage("images/car1.png");
  car2img=loadImage("images/car2.png");
  car3img=loadImage("images/car3.png");
  car4img=loadImage("images/car4.png");
  track=loadImage("images/track.jpg");
}
function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  if(car1.x=car2.x){
    Lives=Lives-1;
  }
  if(car1.x=car3.x){
    Lives=Lives-1;
  }
  if(car1.x=car4.x){
    Lives=Lives-1;
  }
}


function draw(){
if(playerCount===1){
  game.update(1);

}
if(gameState===1){
clear();
game.play();

}
if(gameState===2){
  game.end();
}
}
