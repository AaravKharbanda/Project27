
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(200,500);
	bob2 = new Bob(250,500);
	bob3 = new Bob(300,500);
	bob4 = new Bob(350,500);
	bob5 = new Bob(400,500);
	roofObj = new Roof(300,300,300,10)
	rope1=new Rope(bob1.body,roofObj.body,40*-2,0)
	rope2=new Rope(bob2.body,roofObj.body,40*-1,0)
	rope3=new Rope(bob3.body,roofObj.body,40*0,0)
	rope4=new Rope(bob4.body,roofObj.body,40*1,0)
	rope5=new Rope(bob5.body,roofObj.body,40*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  roofObj.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
}



