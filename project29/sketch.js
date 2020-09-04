const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, block1, block2, block3, block4, block5, block6, block7, block8, block9;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  ground = new Ground(200, 200, 800, 20);

  block1 = new Box(200, 200);
  block2 = new Box(240, 200);
  block3 = new Box(280, 200);
  block4 = new Box(320, 200);
  block5 = new Box(360, 200);
  block6 = new Box(400, 200);
  block7 = new Box(240, 150);
  block8 = new Box(200, 150);
  block9 = new Box(280, 150);


}

function draw() {
  background(255,255,255);
  
  ground.display;

  block1.display;
  block2.display;
  block3.display;
  block4.display;
  block5.display;
  block6.display;
  block7.display;
  block8.display;
  block9.display;


  drawSprites();
}