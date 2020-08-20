const Engine = Matter.Engine;
 const World = Matter.World; 
 const Bodies = Matter.Bodies; 
 var engine , world, object, option,ground,groundoptions,ball,balloptions; 
 function setup() {
createCanvas(400,400); 
  engine = Engine.create(); 
  world = engine.world;
  option = { isStatic : true 
}
groundoptions = {isStatic : true
}
ground = Bodies.rectangle(200,370,400,10,groundoptions);
World.add(world,ground);
balloptions = {restitution:1.0
}
ball = Bodies.circle(300,200,12,balloptions)
object = Bodies.rectangle(100,200,50,50);
World.add(world,object);
 console.log(object); 
World.add(world,ball);
console.log (object.position.x); 
console.log (object.position.y); } 
function draw() 
{ 
background(0,0,128); 
Engine.update(engine);
 rectMode(CENTER); 
 rect (object.position.x , object.position.y , 50,50);
rect(ground.position.x , ground.position.y , 400,10);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,12,12);

drawSprites();
 }
