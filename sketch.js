
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  // creating monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  invisibleGround=createSprite(400,350,900,10);
  invisibleGround.visible=false;
  
  
  
  FoodGroup= createGroup();
  obstaclesGroup= createGroup();
  
score=0;
}


function draw() {
  
background(255);
  
  if(ground.x<0){
    ground.x=ground.width/2;
    
  }
  


  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  spawnFood();
  spawnObstacles();
  
  stroke("white");
  textSize(20);
  fill("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text ("survival Time: "+survivalTime,100,50);
        
  if(obstaclesGroup.isTouching(monkey))
  ground.velocityx=0;
  monkey.velocityy=0;
  obstaclesGroup.setVelocityXEach(0);
  FoodGroup.setVelocityXEach(0);
  obstaclesGroup.setLifetimeEach(-1);
  FoodGroup.setLifetimeEach(-1);
  
  
  
  drawSprites();
}
function spawnFood(){
if (frameCount % 60 === 0){
   var Food = createSprite(600,165,10,40);
   Food.velocityX = -(6);

}
}

function spawnObstacles(){


 
}