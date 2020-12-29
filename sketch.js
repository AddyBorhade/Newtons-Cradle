
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Ball(300,500,20);
	bar = new Ground(400,200,300,20)
	ball2 = new Ball(340,500,20);
	ball3 = new Ball(380,500,20);
	ball4 = new Ball(420,500,20);
	ball5 = new Ball(460,500,20);
	rope1 = new Rope(ball1.body,{x:300,y:200})
	rope2 = new Rope(ball2.body,{x:340,y:200})
	rope3 = new Rope(ball3.body,{x:380,y:200})
	rope4 = new Rope(ball4.body,{x:420,y:200})
	rope5 = new Rope(ball5.body,{x:460,y:200})




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white")
  textSize(15)
  text("Newtons Cradle! Press UP Arrow to start!", 400,50)
  drawSprites();
  ball1.display();
  bar.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-40,y:-40});
}

}

