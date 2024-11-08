function setup() {
  createCanvas(500, 500);
}

let circleDiameter = 50;

let circleCenterX = 0;
let direction = 5;
let circleCenterY = 0
let direction2 = 2

// Remember: The _draw_ method is called FOR EVERY FRAME
function draw() {

  background("black");

  stroke("white");
  
  
strokeWeight(3);
                   
  //                         v

  fill("lightblue")
  circle(width / 2, circleCenterY, circleDiameter)
  circleCenterY += direction2
  if (circleCenterY>= height || circleCenterY <= 0) {
    direction2 *= -1.5
  circleDiameter+=30
  }
}

