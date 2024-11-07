// This program generates a simple math quiz in a graphical window, where the user selects the correct result
// of a randomly generated arithmetic operation.

// <<< TODO: Declare your GLOBAL variables here
// setup function runs once and sets up the quiz elements on the canvas
let operand1 = 0
let operand2 = 0
let operator = 0
let message = ""
let answer = 0
let randomanswer1=0
let randomanswer2=0
let answerposition = 0
function setup() {
    operand1 = Math.floor(random(1, 101))
    operand2 = Math.floor(random(1, 101))
    operator = Math.floor(random(1, 4))
    randomanswer1=Math.floor(random(1,10001))
    randomanswer2=Math.floor(random(1,10001))
    answerposition=Math.floor(random(1,4))

    switch (operator) {
        case 1:
            message = "+"
            answer=operand1+operand2
            break
        case 2:
            message = "-"
            answer=operand1-operand2
            break
        case 3:
            message = "*"
            answer=operand1*operand2
            break
    }
    switch ()
    createCanvas(400, 400);
    background("black");
    fill("yellow")
    textSize(25)

    text(`${operand1}`, width / 3, height / 4)
    text(`${operand2}`, 230, height / 4)
    text(`${message}`, width / 2, height / 4)
    textAlign(CENTER)
    text(`${answer}`, width / 2, height / 2)
        text(`${randomanswer1}`, width / 3, height / 2)
            text(`${randomanswer2}`, width / 3*2, height / 2)

    // <<< TODO: Add your code here
}

// mouseClicked function checks if the user clicked on the correct answer
function mouseClicked() {

    // <<< TODO: Add your code here
}

// mouseMoved function displays mouse coordinates as feedback
function mouseMoved() {
    // This is a HELPER FUNCTION. It should make finding coordinates
    // easier for you. You DO NOT NEED to change this method!

    fill("black");
    noStroke();
    rect(0, height - 20, width, height); // Draws a rectangle to clear previous coordinates

    fill("white");
    textSize(10);
    textAlign(LEFT, BOTTOM); // Aligns coordinates text to bottom-left
    text(`${mouseX}/${mouseY}`, 5, height - 5); // Displays current mouse coordinates
}
