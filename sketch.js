const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var mango1;
var tree;
var Stone, slingshot;
var human;
var gamestate ="onSling"


function preload() {
	tree = loadImage("Tree.png");
	Mango1 = loadImage("sprites/Mango.png");
	Stone = loadImage("sprites/Stone.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

 
    Human = new human(810, 350);
    Mango1 = new mango(810,260,300, PI/2);


	Mango2 =  new mango(810,180,300, PI/2);
	Mango3 = new mango(230,180,80, PI/2);
	Mango4 = new mango(230,180,80, PI/2);
	Mango5 = new mango(230,180,80, PI/2);
	Mango6 = new mango(230,180,80, PI/2);

    stone = new stone(200,50);
    slingshot = new SlingShot(Stone.body,{x:200, y:50});
}

function draw(){
    background(255,0,255);
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();
    human.display();
	Mango1.display();
	
	Mango2.display();
	Mango3.display();
    Mango4.display();
	Mango5.display();
	Mango6.display();

    stone.display();
    platform.display();
    slingshot.display();    
}

function mouseDragged(){
    if(gamestate !=="launched"){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}
}


function mouseReleased(){
   gamestate = "launched"
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(Stone.body);
    }
}