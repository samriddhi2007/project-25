//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
//var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper;
var dustbin;



function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.


	Engine.run(engine);
   ground = new Ground(400,480,800,20)
   paper = new Paper(200,40,5)
   dustbin1 = new Dustbin(600,350,120,130)
  // dustbin2 = new Dustbin(510,420,15,90)
   //dustbin3 = new Dustbin(690,420,15,90)
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
  paper.display();
dustbin1.display();
//dustbin2.display();
//dustbin3.display();
  drawSprites();
 
}
function keyPressed()  {
  if(keyCode === UP_ARROW){
      Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
  }
  }



