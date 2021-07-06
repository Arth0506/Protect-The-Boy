
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var lava = [];
var maxAsh =5;
var score = 0;
var bg;

var ball;
var boy, boyImg;


function preload(){
  boyImg = loadImage("boy.png")
  bg = loadImage("volcanobg.jpg");
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
  water = new Box(200, 200,50, 50);
  boy = createSprite(200, 650);
  boy.addImage(boyImg);
  boy.scale = 0.1;


    //creating drops
    if(frameCount % 150 === 0){

      

        for(var i=0; i<maxAsh; i++){
            lava.push(new Lava(random(0,400), random(0,400)));
        }

    }
    
}

function draw(){
    Engine.update(engine);
    background(bg); 


    
  
  
    //displaying rain drops
    for(var i = 0; i<maxAsh; i++){
      
        lava[i].display();
        lava[i].updateY()

        
    }
    water.display();

    drawSprites();
    fill("green");
    textSize(20)
    text("Score: " + score, 20, 50)
    text("Drag the box to protect the boy!", 20, 20);
}  
function mouseDragged(){

  //if (gameState!=="launched"){
      Matter.Body.setPosition(water.body, {x: mouseX , y: mouseY});
  //}
}