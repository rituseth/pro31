
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drops
var engine, world;

function preload(){
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    drops = new Drops(600,200,20,20)
    
}

function draw(){
    Engine.update(engine);
  drops.display();
  


   
    
   
}   
function reposition(){
    if(this.rain.position.y>height){
Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
    }
}
