
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
// const Render = Matter.Render;

var ground, paper, dustbinObj;
var dustbinImg;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,670,width,20);
	paper = new Paper(200,450,70);
	dustbinObj = new dustbin(1200,660);

	// var render = Render.create({
	// 	element: document.body,
	// 	engine: engine,
	// 	options: {
	// 	  width: 1600,
	// 	  height: 700,
	// 	  wireframes: false
	// 	}
	//   });
  
	//   Engine.run(engine);
	//   Render.run(render);
	
	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("silver");
  Engine.update(engine);
  
  ground.display();
  dustbinObj.display();
  paper.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:130,y:-145});
	}
}


