function preload(){
  bg=loadImage("images/iss.png")
  sleep=loadAnimation("images/sleep.png")
  brush = loadAnimation("images/brush.png")
  gym = loadAnimation("images/gym21.png","images/gym22.png")
  eat = loadAnimation("images/eat1.png","images/eat2.png")
  drink = loadAnimation("images/drink1.png","images/drink2.png")
  move = loadAnimation("images/move.png","images/move2.png")
  bath = loadAnimation("images/bath1.png","images/bath2.png")
}



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  astronaut = createSprite(300,230)
  astronaut.addAnimation("sleeping",sleep)
  astronaut.scale = 0.1
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("b",brush)
    astronaut.changeAnimation("b")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("g",gym)
    astronaut.changeAnimation("g")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
    
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("e",eat)
    astronaut.changeAnimation("e")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
    
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("ba",bath)
    astronaut.changeAnimation("ba")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
    
  }
}
