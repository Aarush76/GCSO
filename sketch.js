var car, wall, speed, weight;
var wallG;
function setup() {
  createCanvas(1000,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "white";
  car.velocityX = speed;

  wall = createSprite(900,200,60,height/2);
  wall.shapecolor = color(80,80,80);  

  car.depth = wall.depth + 1;
}

function draw() {
  background("black");  

  //car.collide(wall);

  if(wall.x - car.x < car.width/2 + wall.width/2){
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22500;
    if(deformation > 180){
      car.shapeColor = "red";
    }
    else if(deformation < 180 && deformation > 100){
      car.shapeColor ="yellow";
    }
    else if(deformation < 100){
      car.shapeColor ="green";
    }
    console.log(deformation);
  }
  drawSprites();
}