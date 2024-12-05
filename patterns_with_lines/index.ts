const SIZE = 601
function setup() {
    createCanvas(601, 301);
    background("black");

    fill("aqua");
    noStroke();

    textSize(50);
    textAlign(CENTER, CENTER);
    text("Move the mouse to start", 0, 0, width, height);
    colorMode(HSB)




}
let height1 = 0
let height2 = 5
let width11 = 0
let width12 = 10
let width21 = 10
let width22 = 0

function mouseMoved() {
    resetMatrix();
    background("black");
    strokeWeight(2);

    noFill();




    let color1 = 0






    for (let x1 = 0; x1 <= SIZE; x1++) {

        for (let y1 = 0; y1 <= SIZE; y1 += 10) {
            color1 = (color1 + 0.1) % 360
            stroke(color1, 100, 100)
            line(width11, height1, width12, height2)
            height1 += 10
            line(width21, height2, width22, height1)
            height2 += 10


        }

        translate(10, 0)
        height1 = 0
        height2 = 5
    }
    textAlign(LEFT)
    let x = Math.round(mouseX)
    let i = ((x * 100) / 601) + 100
    let percentage = Math.round(i)
    noStroke()
    resetMatrix()
    fill("black")
    rect(0, 280, 601, 30)
    fill("white")
    textSize(12)
    text(`${x} of 601=${percentage}%`, 30, 290)

}