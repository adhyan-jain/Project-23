var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1,box2,box3;
var zombieL1,zombieL2,zombieL3,zombieL4;
var zombieR1,zombieR2,zombieR3,zombieR4;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
  helicopterIMG=loadImage("helicopter.png");
  packageIMG=loadImage("package.png");
  zombieIMG1 = loadImage("zombie1.png");
  zombieIMG2 = loadImage("zombie2.png");
}

function setup() {
 createCanvas(800, 700);
 rectMode(CENTER);
 
 groundSprite=createSprite(width/2, height-35, width,20);
 groundSprite.shapeColor=color(255)

 packageSprite=createSprite(width/2, 80, 10,10);
 packageSprite.addImage(packageIMG)
 packageSprite.scale=0.2

 helicopterSprite=createSprite(width/2, 80, 10,10);
 helicopterSprite.addImage(helicopterIMG)
 helicopterSprite.scale=0.6

 engine = Engine.create();
 world = engine.world;

 keyPressed();
      
 packageBody = Bodies.rectangle(width/2 , 80, 30, 35, {isStatic: true});
 World.add(world, packageBody);
      
 //Create a Ground
 ground = Bodies.rectangle(width/2, height-35, width, 20 , {isStatic:true} );
 World.add(world, ground);
     
 box1 = new Box(width/2,height-55,200,20);
 box2 = new Box(width/2+100,height-95,20,100);
 box3 = new Box(width/2-100,height-95,20,100);

 zombieL1 = new Zombie1();
 zombieL2 = new Zombie1();
 zombieL3 = new Zombie1();

 zombieR1 = new Zombie2();
 zombieR2 = new Zombie2();
 zombieR3 = new Zombie2();

 Engine.run(engine);
}

function draw(){
 
  background(0,0,0);

  Engine.update(engine);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
 
  box1.display();
  box2.display();
  box3.display();

  zombieL1.display(40,615);
  zombieL2.display(130,615);
  zombieL3.display(210,615);

  zombieR1.display(760,615);
  zombieR2.display(670,615);
  zombieR3.display(590,615);

  drawSprites();
}

function keyPressed() {
 
 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(packageBody, false);
	}
}