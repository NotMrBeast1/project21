var bullet, wall, speed, weight, thickness



function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 30);

  speed=random(55,90);
  weight=random(400,1500)
  thickness=random(22,83)

  wall=createSprite(1200,200,thickness,height/2);


  
 
}

function draw() {
  background(255,255,255);  
  
  bullet.velocityX = speed;

  if(wall.x-bullet.x<(bullet.width+wall.height)/2)
  {bullet.velocityX=0
  var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(deformation>10){
    bullet.shapeColor=color(255,0,0)
  }
  if(deformation<10){
    bullet.shapeColor=color(0,255,0)
  }
  }
  
  drawSprites();
}