
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(200,450,70);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();

  
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

    
  	}
}









/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var world;
var paper;
var ground;
var bin;
//var box1,box2,box3;


function setup() {
 createCanvas(1600, 700);//1700
 rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	

  ground = new Ground(width/2,670,width,20); //850
  paper= new Paper(200,450,70); 
  bin=new Dustbin(1200,650);    
	
	var render = Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1600,
			height:700,
			wireframes:false
		}
	});

	Engine.run(engine);
	Render.run(render);

}


function draw() {
	rectMode(CENTER);
	background("black");
    
   
 bin.display();
 ground.display();
 paper.display();



}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body, paper.body.position, {x:85,y:85});

	}
}*/




/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paper;
var ground1;
var bin;
//var box1,box2,box3;

function preload(){
	//paperimg=loadImage("sprites/paper.png");
	dustbinimg=loadImage("sprites/dustbingreen.png");
}


function setup() {
 var canvas=createCanvas(1600, 700);//1700
 rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

  ground1 = new Ground(2000,650,4000,10); //850
  paper= new Paper(100,500); 
  
  bin=loadImage(dustbinimg);
  bin=createSprite(2000,300,75,75);       

 

    box1=createSprite(2670,635,200,20);//1470,
	box1.shapeColor=color("white");

	box2=createSprite(2570,590,20,100);
	box2.shapeColor=color("white");

	box3=createSprite(2770,590,20,100);
	box3.shapeColor=color("white");

	var box1_options={
		isStatic: true
	}

    box1 = Bodies.rectangle(2670,635, 200, 20 ,box1_options );
	World.add(world, box1);
	
	var box2_options={
		isStatic: true
	}

    box2 = Bodies.rectangle(2570, 590, 20, 200 ,box2_options );
	World.add(world, box2);
	
	var box3_options={
		isStatic: true
	}

    box3 = Bodies.rectangle(2770, 590, 20, 200 ,box3_options );
	World.add(world, box3);
	
	line=createSprite(2000,325,3,750);
	line.shapeColor=color("red");
}


function draw() {
	background("black");
  Engine.update(engine);
   
//if(keyPressed()){}

  drawSprites();

 ground1.display();
 paper.display();
}*/

/*function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body, paper.body.position, {x:85,y:-85});

	}
}*/


