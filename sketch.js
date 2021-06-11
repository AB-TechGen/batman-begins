const World = Matter.World
const Bodies = Matter.Bodies
const Engine = Matter.Engine

var maxDrops = 100;
var drops = [];

function preload(){
    boyImage = loadAnimation("walking_1.png", "walking_2.png","walking_3.png","walking_4.png", "walking_5.png", "walking_6.png", "walking_7.png", "walking_8.png" )
}

function setup(){
    createCanvas(1600, 700)
    engine = Engine.create()
    world = engine.world
    boy = createSprite(400, 400, 20, 20)
    boy.addAnimation("running ",boyImage)
    
}

function draw(){
    background("black")
    Engine.update(engine)
    if(frameCount % 5 === 0){
        for(i = 0; i < maxDrops; i++){
            drops.push(new Drops(random(0, 400), random(0, 200)))
            drops[i].display()
            drops[i].update()
    
        }
    }

    drawSprites() 
    
}   

