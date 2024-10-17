  let binaryDigit1: number = 0
  let binaryDigit2: number = 0
  let binaryDigit3: number = 0
  let binaryDigit4: number = 0
function setup() {
  createCanvas(500, 300)
  background("black")
  const num = Math.floor(random(0, 15));

  const lastDigit1 = num % 2;
  const numWithoutLastDigit = Math.floor(num / 2);
  const lastDigit2 = numWithoutLastDigit % 2;
  const numWithoutLastDigit1 = Math.floor(numWithoutLastDigit / 2);
  const lastDigit3 = numWithoutLastDigit1 % 2;
  const numWithoutLastDigit2 = Math.floor(numWithoutLastDigit1 / 2);
  const lastDigit4 = numWithoutLastDigit2 % 2;
  const numWithoutLastDigit3 = Math.floor(numWithoutLastDigit2 / 2);
  const numWithoutLastDigit4 = Math.floor(numWithoutLastDigit3 / 2);
  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(`${num} in binary?`, width / 2, height - 20);
  strokeWeight(1)
  textSize(40)
  
  text(binaryDigit4, 337, 150)
  text(binaryDigit3, 274, 150)
  text(binaryDigit2, 211, 150)
  text(binaryDigit1, 148, 150)

  noFill()
  stroke("yellow")
  strokeWeight(3)
  rect(2 * width / 8, 100, 50, 100)
  rect(3 * width / 8, 100, 50, 100)
  rect(4 * width / 8, 100, 50, 100)
  rect(5 * width / 8, 100, 50, 100)
}
function mouseClicked() {

  if (mouseX < 2 * width / 8 + 50 && mouseX > 2 * width / 8 && mouseY > 100 && mouseY < 200) {
  fill("black")
   rect(2 * width / 8, 100, 50, 100)
   fill("yellow")
    if(binaryDigit1===0){
      binaryDigit1=1
    }
    else if(binaryDigit1===1){binaryDigit1=0}
  text(binaryDigit1, 148, 150)
  }
    if (mouseX < 3 * width / 8 + 50 && mouseX > 3 * width / 8 && mouseY > 100 && mouseY < 200) {
    if(binaryDigit2===0){
      binaryDigit2=1
    }
  text(binaryDigit2, 211, 150)
  }
    if (mouseX < 2 * width / 8 + 50 && mouseX > 2 * width / 8 && mouseY > 100 && mouseY < 200) {
    if(binaryDigit1===0){
      binaryDigit1=1
    }
  text(binaryDigit1, 148, 150)
  }
}