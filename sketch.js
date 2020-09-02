var paperimg,dustbinimg,papersprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2
}
var box1,box2,box3;
function preload()
{
	paperimg=loadImage("paper.img");
	dustbinimg=loadImage("dustbin.img");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ground=createSprite(0,height-40,1600,10);
	papersprite=createSprite(10,height-50,10,20);
	papersprite.addImage(paperimg);

	box1=createSprite(400,height-50,200,20);
	box1.addImage(dustbinimg);
	box2=createSprite(295,height-90,20,100);
	box3=createSprite(500,height-90,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	
	
  Matter.Bodies.circle(paper.x,paper.y,70);
  keyPressed();
  drawSprites();
  ground.display();
  papersprite.display();
  box1.display();
 
}
function keyPressed()
{
	if(keyCode == UP_ARROW)
	{
		papersprite.velocityX=2;
		Matter.Body.applyForce(papersprite.body,papersprite.body.position,{x:85,y:-85})
	}
}



