function setup() {
  createCanvas(500, 300)
  background("black")
  const num = Math.floor(random(0, 16));

 const lastDigit1 = num % 2;
  const numWithoutLastDigit = Math.floor(num / 2);
  const lastDigit2 = numWithoutLastDigit % 2;
  const numWithoutLastDigit1 = Math.floor(numWithoutLastDigit / 2);
  const lastDigit3 =numWithoutLastDigit1 % 2;
  const numWithoutLastDigit2 = Math.floor(numWithoutLastDigit1 / 2);
  const lastDigit4 = numWithoutLastDigit2 % 2;
  const numWithoutLastDigit3 = Math.floor( numWithoutLastDigit2/ 2);
  const numWithoutLastDigit4 = Math.floor( numWithoutLastDigit3/ 2);
  
  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);
  strokeWeight(1)
  textSize(40)
  text(lastDigit1,400,150)
  text(lastDigit2,337,150)
  text(lastDigit3,274,150)
  text(lastDigit4,211,150)

  noFill()
  stroke("yellow")
  strokeWeight(3)
  rect(width / 8, 100, 50, 100)
  rect(2*width / 8, 100, 50, 100)
  rect(3*width / 8, 100, 50, 100)
  rect(4*width / 8, 100, 50, 100)
  rect(5*width / 8, 100, 50, 100)
  rect(6*width / 8, 100, 50, 100)
}