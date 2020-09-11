
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	groun1 = new Ground(400,670,800,20);

	//Create the Bodies Here.

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



