const SIZE = 400;  // Canvas size (square)
const MARGIN = 25; // Margin between the edges and the rays.
                   // This is also the distance between the rays.

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");
}

function mouseMoved() {
  background("black");
  strokeWeight(2);
  stroke("green")
  let i=MARGIN
while(i<SIZE){
line(i,MARGIN,mouseX,mouseY)
line(i,SIZE-MARGIN,mouseX,mouseY)
i+=MARGIN
}
  // <<< Add your code here
}
