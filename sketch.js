var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
 fixedRect =  createSprite(200, 200, 50, 80);
 fixedRect.shapeColor = "green";
 movingRect = createSprite(400,200,80,30);
 movingRect.shapeColor = "green";
gameObj1 =  createSprite(600, 200, 50, 80);
 gameObj1.shapeColor = "green";
 gameObj2 = createSprite(600,400,80,30);
 gameObj2.shapeColor = "green";
gameObj1.velocityY = 5;
gameObj2.velocityY = -5;

}

function draw() {
  background(0); 
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red"; 
}
else {
  movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green"; 
}
 bounceOff(gameObj1,gameObj2);

  drawSprites();

}
