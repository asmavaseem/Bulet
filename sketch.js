var bullet,speed,weight;
var wall,thickness;
var damage;

function setup() 
{
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 30, 5);
  speed = random(223,321);
  thickness = random(22,83);
  weight = random(30,52);
  wall = createSprite(1200,200,thickness,height/2);

  bullet.velocityX = speed;

  damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
}

function draw() 
{
  background(0,0,0);
  console.log(damage);
  
  if(isTouching(bullet,wall))
  {
    if(damage <= 10)
    {
      wall.shapeColor=color(0,255,0);
    }
    else if(damage > 10)
    {
      wall.shapeColor=color(255,0,0);
    }
  }
  
  drawSprites();
}

function isTouching(object1,object2)
{
  if(object2.x - object1.x < (object1.width+object2.width)/2)
  {
    bullet.velocityX = 0;
    return true;
  }
  return false;
}