const World = Matter.World;
const Engine = Matter.Engine; 
const Bodies = Matter.Bodies; 

var engine, world; 

var plane, planeImg;
var backgroundImg;
var player1, player2; 
var player1img, player2img; 
var database; 
var ground; 


function preload()
{
  backgroundImg = loadImage("bg for sdg 1.png");
  planeImg = loadImage("plane.png");
  player1_img = loadImage("char1.png");
  player2_img = loadImage("char2.png");
}



function setup() 
{
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  ground = Bodies.rectangle(width/2, height, width, 5, {isStatic:true});
  World.add(world, ground);

  player1 = Bodies.rectangle(width/2, 100, 100, 100, {isStatic: false});
  World.add(world, player1);

  player2 = Bodies.rectangle(width/2 + 50, 100, 100, 100, {isStatic: false});
  World.add(world, player2);
  
  plane = createSprite(width/2,100); 
  plane.addImage(planeImg); 
}

function draw() {
  background(backgroundImg);

  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y, width, 20);
    
  imageMode(CENTER);
  image(player1_img, player1.position.x, player1.position.y, 100, 100);

  imageMode(CENTER);
  image(player2_img, player2.position.x, player2.position.y, 100, 100);

  drawSprites(); 
}


// function keyPressed() {
//   if (keyDown("down")) {
//     Body.setStatic(player1.body, false)
//     Body.setStatic(player2.body, false)
//   }
//  }