
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,dustbin2,dustbin3;
var paperObject,ground;


function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	dustbin1=new Dustbin(1180,550,150,200);
	paperObject=  new Paper(370,370,40);
	ground= new Ground(width/2,680,1400,20)


	Engine.run(engine);
  
}


function draw() {
  background("white");

  Engine.update(engine);

  dustbin1.display();
  paperObject.display();
  ground.display();

  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode===UP_ARROW) {

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}

	



