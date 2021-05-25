const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig
var a;
var b
function setup(){
    var canvas = createCanvas(1000,1000);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    ground = new Ground(500,height,1000,40)
    pig= new Pig(200,200)
    a = new Log(200,200,200,PI/2)
    b = new g(mouseX,mouseY)
}

function draw(){
    background(0);
    Engine.update(engine);
 
    box1.display();
    box2.display();
pig.display()
    ground.display();
    a.display()
    b.display()
}