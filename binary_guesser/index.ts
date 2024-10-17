let binaryDigit1: number = 0
let binaryDigit2: number = 0
let binaryDigit3: number = 0
let binaryDigit4: number = 0
let num: number;
function setup() {
  num = Math.floor(random(0, 15))

  createCanvas(500, 300)
  background("black")

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  textSize(30)
  text(`${num} in binary?`, 250, 50);
  strokeWeight(1)
  textSize(40)

  text(binaryDigit4, 337, 150)
  text(binaryDigit3, 274, 150)
  text(binaryDigit2, 211, 150)
  text(binaryDigit1, 148, 150)

  noFill()
  stroke("yellow")
  strokeWeight(1)
  rect(2 * width / 8, 100, 50, 100)
  rect(3 * width / 8, 100, 50, 100)
  rect(4 * width / 8, 100, 50, 100)
  rect(5 * width / 8, 100, 50, 100)
}
function mouseClicked() {
  strokeWeight(1)

  if (mouseX < 2 * width / 8 + 50 && mouseX > 2 * width / 8 && mouseY > 100 && mouseY < 200) {
    fill("black")
    rect(2 * width / 8, 100, 50, 100)
    fill("yellow")
    if (binaryDigit1 === 0) {
      binaryDigit1 = 1
    } else { binaryDigit1 = 0 }
    text(binaryDigit1, 148, 150)
  }
  if (mouseX < 3 * width / 8 + 50 && mouseX > 3 * width / 8 && mouseY > 100 && mouseY < 200) {
    fill("black")
    rect(3 * width / 8, 100, 50, 100)
    fill("yellow")
    if (binaryDigit2 === 0) {
      binaryDigit2 = 1
    } else { binaryDigit2 = 0 }
    text(binaryDigit2, 211, 150)
  }
  if (mouseX < 4 * width / 8 + 50 && mouseX > 4 * width / 8 && mouseY > 100 && mouseY < 200) {
    fill("black")
    rect(4 * width / 8, 100, 50, 100)
    fill("yellow")
    if (binaryDigit3 === 0) {
      binaryDigit3 = 1
    } else { binaryDigit3 = 0 }
    text(binaryDigit3, 274, 150)
  }
  if (mouseX < 5 * width / 8 + 50 && mouseX > 5 * width / 8 && mouseY > 100 && mouseY < 200) {
    fill("black")
    rect(5 * width / 8, 100, 50, 100)
    fill("yellow")
    if (binaryDigit4 === 0) {
      binaryDigit4 = 1
    } else { binaryDigit4 = 0 }
    text(binaryDigit4, 337, 150)
  }
  let decimalnum = binaryDigit1 * Math.pow(2, 3) + binaryDigit2 * Math.pow(2, 2) + binaryDigit3 * Math.pow(2, 1) + binaryDigit4 * Math.pow(2, 0)
  if (decimalnum === num) {
    background("black")
    noFill()
    stroke("green")
    rect(2 * width / 8, 100, 50, 100)
    rect(3 * width / 8, 100, 50, 100)
    rect(4 * width / 8, 100, 50, 100)
    rect(5 * width / 8, 100, 50, 100)
    fill("green")
      text(binaryDigit4, 337, 150)
  text(binaryDigit3, 274, 150)
  text(binaryDigit2, 211, 150)
  text(binaryDigit1, 148, 150)
    text(`${num} in binary?`, 250, 50);
    text(`Correct!`,250,250)
  }
}