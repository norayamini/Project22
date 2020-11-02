var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var packageBody_options;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");

}

function setup() {
	createCanvas(2000, 900);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
    //packageSprite.debug=true;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	
	groundSprite=createSprite(width/2,860,2000,10);
	groundSprite.shapeColor="white";
	//groundSprite.debug=true;


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle( helicopterSprite.x, 200 , 5 );
	World.add(world, packageBody);
	//packageBody.debug=true;

	Matter.Body.setStatic(packageBody, true)
	

	//Create a Ground

	var ground_option = {
		isStatic : true
	}

	ground = Bodies.rectangle(groundSprite.x, groundSprite.y, groundSprite.width, groundSprite.height ,ground_option);
    World.add(world, ground);
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed()
  drawSprites();
  

 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody, false)
    }
}