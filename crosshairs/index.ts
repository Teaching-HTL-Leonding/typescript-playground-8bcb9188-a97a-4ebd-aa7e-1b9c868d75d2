function setup() {
  createCanvas(500, 500);
  background("lightblue")
}
function mouseMoved() {
  background("lightblue");
  fill("black")
  rect(mouseX - 1, mouseY - 70, 2, 140);
  rect(mouseX - 70, mouseY - 1, 140, 2);
  noFill();
  strokeWeight(2)
  text(`Click at X: ${mouseX}, Y: ${mouseY}`, width - 5, height - 5);
  circle(mouseX, mouseY, 70);
  circle(mouseX, mouseY, 30)
}
