let clickProtocol = "0/0";
function setup() {
  createCanvas(400, 400);
  background("lightblue");
  noStroke();
  fill("cyan")
  circle(0,0,20)
  fill("black")
  text(clickProtocol,20,20,460,460)
}

function mouseClicked() {
  fill("lightblue")
  fill("cyan");
  noStroke();
  circle(mouseX,mouseY,20)
  clickProtocol = clickProtocol + `, ${mouseX}/${mouseY}`
  fill("black")
  text(clickProtocol,20,20,400,400)
}
