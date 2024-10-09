function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();
    fill("yellow")
    rect(0,0,200,100)
    fill("blue")
    rect(0,100,200,100)
    fill("green")
    rect(200,0,200,100)
    fill("red")
    rect(200,100,200,100)
    fill("black")
    rect(75,75,250,50)


    // <<< Add your code here
}
    let message: string;
function mouseClicked() {


    if (mouseX < width/2)(mouseY<height/2) {
        message = "YELLOW"
    } if (mouseY >height/2 ) {
        message = "RED"
    } else if (mouseY>height/2){
        message="BLUE"
    }
    else {
        message = "GREEN"
     
    }
    fill("black")
    rect(75,75,250,50)
    fill("white")
    textAlign(CENTER)
textSize(30)
text(`${message}`,width/2,100)
}

// <<< Add the function `moveClicked` with the required code here
