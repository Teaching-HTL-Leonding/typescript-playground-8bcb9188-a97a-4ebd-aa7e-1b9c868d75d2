function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();
    fill("yellow")
    rect(0, 0, width / 3, height)
    fill("green")
    rect(width / 3, 0, width / 3, height)
    fill("red")
    rect(width / 3 * 2, 0, width / 3, height)
        rect(0, 150, 400, 50)
    // <<< Add your code here
    fill("black")
    rect(0, 150, 400, 50)
}
    let message: string;
function mouseClicked() {


    if (mouseX < width / 3) {
        message = "YELLOW"
    } else if (mouseX < width / 3 * 2) {
        message = "GREEN"
    } else {
        message = "RED"
     
    }
    fill("black")
        rect(0, 150, 400, 50)
    fill("white")
    textAlign(CENTER)
textSize(30)
text(`${message}`,width/2,200)
}


// <<< Add the function `moveClicked` with the required code here
