
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImage ;
var ground, stone, treeImage, mango1, mango2, mango3,mango4, mango5, sling;
function preload()
{
	boyImage = loadImage("Plucking mangoes/boy.png");
	treeImage = loadImage("Plucking mangoes/tree.png");
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,790,1200,20);
//	tree = new Tree(900,450,500,600);
	mango1 = new Mango(700,300,30);
	mango2 = new Mango(800,300,30);
	mango3 = new Mango(750,300,30);
	mango4 = new Mango(850,300,30);
	mango5 = new Mango(900,300,30);
	stone = new Stone(230,520,30);

	sling = new Sling(stone.body, {x:230,y:520});

	Engine.run(engine);
  
}


function draw() {
  
  background("white");
  image(boyImage,200,450,200,300);
  image(treeImage,500,200,500,600);
  stone.display();
  ground.display();
 // tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  sling.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
}

function keyPressed() {
	if(keyCode === 32){
		Body.setPosition(stone.body, {x:230,y:520})
		sling.attach(stone.body);
	}
}
function mouseDragged() {
	Body.setPosition(stone.body,{x:mouseX, y:mouseY});
	return false;
}
function mouseReleased() {
	Body.setPosition(stone.body,{x:mouseX, y:mouseY});
	sling.fly();
	return false;
//	Body.applyForce(stone.body,stone.body.position,{x:300,y:-250});
}

function detectCollision(stoneObj,mangoObj){

	var stonePos = stoneObj.body.position;
	var mangoPos = mangoObj.body.position;

	var distance = dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y);
	if(distance <= stoneObj.r + mangoObj.r){
		Body.setStatic(mangoObj.body,false);
		//console.log(mangoObj);
	}

}