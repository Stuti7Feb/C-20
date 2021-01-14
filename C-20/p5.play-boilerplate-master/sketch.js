var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityX = -2;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor="green";
  movingRect.velocityX = 2;
}

function draw() {
  background(0);
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){
      fixedRect.velocityX = (-1) * fixedRect.velocityX;
      movingRect.velocityX = (-1) * movingRect.velocityX;
    }
    if(movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
        fixedRect.velocityY = (-1) * fixedRect.velocityY;
        movingRect.velocityY = (-1) * movingRect.velocityY;
  }
  
  drawSprites();
}