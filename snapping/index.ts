function setup() {
  createCanvas(200, 200);
  background("lightblue");
}

function mouseMoved() {
  const snap = 40; // marker must snap every 40 pixels
  const markerSize = 10; // size of marker

  background("lightblue");

  let x: number = Math.round(mouseX / 40) * 40;
  let y: number = Math.round(mouseY / 40) * 40;
  noStroke();
  fill("white");
  rect(x - 1, y - 10, 2, 20);
  rect(x - 10, y - 1, 20, 2);
        fill("white");
    noStroke();

  text(` ${x}/${y}`, width - 200, height - 5);


  // Add your code here
}
