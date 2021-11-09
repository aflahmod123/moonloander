let ground;
let lander;
var lander_img;
var bg_img;
let randomNumber1;
let randomNumber2;
var obstaclegroup;
var vx = 0;
var g = 0.05;
var vy = 0;
var obstacle1;
var Image1;
var gameState = 1;
var Play = 1;
var Gameover = 0;
var gameOverImage;
var gameOverSprite;
var score = 0;
function preload()
{
  Image1 = loadImage("obstacleImage.png")
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  gameOverImage = loadImage("gameOver.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);
   ground = createSprite(300,650,2000,100);
   gameOverSprite = createSprite(500,350,50,50)
   gameOverSprite.addImage(gameOverImage);
   ground.visible = false;
  lander = createSprite(100,50,30,30);
 // lander.debug = true;
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.setCollider("rectangle",0,0,200,200);
obstaclegroup = new Group();
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  
  image(bg_img,0,0);
  push()
  fill(255);
  
  text("Score:" + score,800,75);
  pop();
  
    lander.collide(ground);
    if(gameState === 1){
      score = score + Math.round(getFrameRate()/120);
    
    if(keyDown("right")){
    lander.x = lander.x + 2.5

  }
  if(keyDown("left")){
    lander.x = lander.x - 2.5
  
  }
  Obstacles();
  if(lander.isTouching(obstaclegroup)){
    gameState = 0;

  }
  lander.velocityY = 0.25;
  gameOverSprite.visible = false;
    }
  if(gameState === 0){
    obstaclegroup.setVelocityEach(0, 0);
    obstaclegroup.destroyEach();
    obstacle1.visible = false;
    lander.velocityY = 0;
    lander.velocityX = 0;
    lander.visible = false;
    gameOverSprite.visible = true;
    textSize(20)
    fill("white")
    stroke("black")
    strokeWeight(3);
    text("Press 'R' To restart",400,500);
   
    
 
  }

  //console.log(lander.x,lander.y);


  if(keyDown("r")){
    gameState = 1
    lander.visible = true;
    lander.x = 100;
    lander.y = 50;
   score = 0;
 
  }
  drawSprites();
}


function Obstacles(){
if(frameCount%60 === 0){
  randY = random(1,700);
  randX = random(1,1000);
  random3 = Math.round(randX);
  random4 = Math.round(randY);
  var randomNumber3 = random(2,5);

  var randomNumber4 = round(randomNumber3);

  var randomNumber5 = random(-3,-5);

  var randomNumber6 = round(randomNumber5);
  

  var random1 = round(randomNumber3);
  var random2 = round(randomNumber4);
  var rand1 = random(randomNumber4,randomNumber6);
  var rand2 = round(rand1);
var randomScale = random(0.3,0.8);


obstacle1 = createSprite( random3,random4 , 100 ,100)
obstacle1.addImage(Image1);

obstaclegroup.add(obstacle1);

obstacle1.scale = randomScale;
obstacle1.collide
obstacle1.velocityY = rand2;
obstacle1.velocityX = rand2;

if(obstacle1.velocityX === 0 && obstacle1.velocityY ===0 ){
obstaclegroup.destroyEach();
}

console.log(randomScale)
}

}