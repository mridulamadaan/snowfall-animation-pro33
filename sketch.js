const Universe = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ourUniverse, world;

var bgImg,boyImg;
var boy,ground;
var snowFlaske;

function preload(){
  bgImg = loadImage("snow2.jpg");
  boyImg = loadImage("snow img c33.jpg");
}


function setup() {
  createCanvas(1000,700);

  ourUniverse = Universe.create();
  world = ourUniverse.world;

 boy = createSprite(200,500,30,40);
 boy.shapeColor = "red";
 boy.addImage(boyImg);
 boy.scale = 0.2

 ground = createSprite(500,680,1000,10);
 ground.visible = false;
 snowFlake = new Snow(100,10);
}

function draw() {
  background(bgImg);  
  Universe.update(ourUniverse);  

  if(keyDown("space")){
    boy.velocityY = -10;
  }
  boy.velocityY = boy.velocityY+0.8;
  boy.collide(ground);

  snowFlake.display();

  drawSprites();
}