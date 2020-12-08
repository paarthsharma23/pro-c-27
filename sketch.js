
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas( 1350, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
					   
	this.bob1= new Bob(400,400,100);                      
	this.bob2= new Bob(500,400,100);					
	this.bob3= new Bob(600,400,100);						
	this.bob4= new Bob(700,400,100);					 
	this.bob5= new Bob(800,400,100);						
	this.bob6= new Bob(900,400,100);					  
	this.roof= new Roof(675,100,1350,20);					   
	this.rope1= new Rope(this.roof.body,this.bob1.body,-275,0);			   
	this.rope2= new Rope(this.roof.body,this.bob2.body,-175,0);						  
	this.rope3= new Rope(this.roof.body,this.bob3.body,-75,0); 
	this.rope4= new Rope(this.roof.body,this.bob4.body,25,0);					  
	this.rope5= new Rope(this.roof.body,this.bob5.body,125,0);					   
	this.rope6= new Rope(this.roof.body,this.bob6.body,225,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  this.roof.display();
  this.bob1.display();
  this.bob2.display();
  this.bob3.display(); 
  this.bob4.display(); 
  this.bob5.display(); 
  this.bob6.display();
  this.rope1.display(); 
  this.rope2.display();
  this.rope3.display();
  this.rope4.display();
  this.rope5.display();
  this.rope6.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed (){
	  if( keyCode ( UP_ARROW ) ){
	   Matter.Body.applyForce(this.paper.body,this.paper.body.position,{x:-220})
	  }  
	}
