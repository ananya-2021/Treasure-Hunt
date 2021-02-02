var path,boy,cash,diamonds,jwellery,ruby,sword,obstacle;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,rubyImg,swordImg,obstacleImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,rubyG,swordGroup,obstacleG;
var PLAY = 1,END = 0,gameState = PLAY;
var end,endImg;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  rubyImg = loadImage("ruby.png");
  swordImg = loadImage("sword.png");
  obstacleImg = loadImage("obstacle2.png");
 endImg =loadImage("gameOver.png");
  
}

function setup(){
  
  createCanvas(400,400);

 // Moving background
 path=createSprite(200,200);
 path.addImage(pathImg);
 path.velocityY = 4;

 //creating boy running
 boy = createSprite(70,330,20,20);
 boy.addAnimation("SahilRunning",boyImg);
 boy.scale=0.08;
  
 end = createSprite(200,200);
 end.addImage(endImg);
 end.scale = 0.6;

 cashG=new Group();
 diamondsG=new Group();
 jwelleryG=new Group();
 swordGroup=new Group();
 rubyG = new Group();
 obstacleG = new Group();

}

function draw() {

  background(0);
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  if(gameState === PLAY){
    boy.x = World.mouseX;
    
    end.visible = false;
    
    createCash();
    createDiamonds();
    createJwellery();
    createRuby();
    createSword();
    createObstacle();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection = treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection = treasureCollection+100;
    }
    else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection = treasureCollection+150;
    } 
    else if (rubyG.isTouching(boy)) {
      rubyG.destroyEach();
      treasureCollection = treasureCollection+200;
    }
    else if(swordGroup.isTouching(boy)) {
      swordGroup.destroyEach();
      gameState = END;  
    }
    else if(obstacleG.isTouching(boy)) {
      obstacleG.destroyEach();
      gameState = END;  
    }
   }
  
  if(gameState === END){
    boy.visible = false;
    end.visible = true;
    
    path.velocityY = 0;
    
    cashG.destroyEach();
    diamondsG.destroyEach();
    jwelleryG.destroyEach();
    rubyG.destroyEach();
    swordGroup.destroyEach();
    obstacleG.destroyEach();

    
    cashG.setVelocityYEach(0);
    diamondsG.setVelocityYEach(0);
    jwelleryG.setVelocityYEach(0);
    rubyG.setVelocityYEach(0);
    swordGroup.setVelocityYEach(0);
    obstacleG.setVelocityYEach(0);
  }
    
  drawSprites();
  
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);

}

function createCash() {
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 8;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 80 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350)));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 8;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 80 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350)));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 8;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createRuby() {
  if (World.frameCount % 80 == 0) {
  var ruby = createSprite(Math.round(random(50, 350)));
  ruby.addImage(rubyImg);
  ruby.scale=0.1;
  ruby.velocityY = 8;
  ruby.lifetime = 150;
  rubyG.add(ruby);
  }
}

function createSword(){
  if (World.frameCount % 80 == 0) {
  var sword = createSprite(Math.round(random(50, 350)));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 8;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}

function createObstacle() {
  if (World.frameCount % 80 == 0) {
  var obstacle = createSprite(Math.round(random(50, 350)));
  obstacle.addImage(obstacleImg);
  obstacle.scale=0.13;
  obstacle.velocityY = 8;
  obstacle.lifetime = 150;
  obstacleG.add(obstacle);
  }
}