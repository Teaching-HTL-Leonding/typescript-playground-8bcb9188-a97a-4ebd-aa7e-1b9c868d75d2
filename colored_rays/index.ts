const SIZE = 400;    // Canvas size (square)
const MARGIN = 25; // Margin between the edges and the rays.
let raycolor = 0
// This is also the distance between the rays.
function setup() {
  colorMode(HSB)
  createCanvas(SIZE, SIZE);
  background("black");
}

function draw() {
  background("black");
  strokeWeight(2);

  // <<< Add your code here
  let i = MARGIN;
  while (i <= SIZE - MARGIN) {
    stroke(raycolor, 100, 100);
    line(MARGIN, i, mouseX, mouseY);
    line(width - MARGIN, i, mouseX, mouseY);

    raycolor = (raycolor + 0.25) % 360

    line(i, MARGIN, mouseX, mouseY);
    line(i, height - MARGIN, mouseX, mouseY);

    i += MARGIN;
  }
}
