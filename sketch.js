
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var penduleum, penduleum1;
var Sling, sling1


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	text("press 7 to start", 200, 20);
	
	
	penduleum= new Penduleum(260,150,255);
	sling= new Slin(penduleum.body, {x: 260, y:150})
	penduleum1= new Penduleum(320,150,255);
	sling1= new Slin(penduleum1.body, {x: 320, y:150})
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  if(keyPressed(7))
  {
  penduleum.display()
  sling.display()
  penduleum1.display()
  sling1.display()
  }
  drawSprites();
 
}



