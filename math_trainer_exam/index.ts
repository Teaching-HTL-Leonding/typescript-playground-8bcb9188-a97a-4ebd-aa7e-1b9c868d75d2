// This program generates a simple math quiz in a graphical window, where the user selects the correct result
// of a randomly generated arithmetic operation.

// <<< TODO: Declare your GLOBAL variables here
// setup function runs once and sets up the quiz elements on the canvas
let operand1 = 0
let operand2 = 0
let operator = 0
let message = ""
let answer = 0
let randomanswer1 = 0
let randomanswer2 = 0
let randomanswer3 = 0
let answerposition = 0
let temp = 0
function setup() {
    operand1 = Math.floor(random(1, 101))
    operand2 = Math.floor(random(1, 101))
    operator = Math.floor(random(1, 4))
    randomanswer1 = Math.floor(random(1, 101))
    randomanswer2 = Math.floor(random(1, 101))
    randomanswer3 = Math.floor(random(1, 101))
    answerposition = Math.floor(random(1, 4))

    switch (operator) {
        case 1:
            message = "+"
            answer = operand1 + operand2
            break
        case 2:
            message = "-"
            if (operand1 < operand2) {
                temp = operand1
                operand1 = operand2
                operand2 = temp
            }
            answer = operand1 - operand2
            break
        case 3:
            message = "*"
            if (operand1 > 10) {
                operand1 = Math.floor(random(1, 11))
            }
            if (operand2 > 10) {
                operand2 = Math.floor(random(1, 11))
            }
            answer = operand1 * operand2
            break
    }
    switch (answerposition) {
        case 1:
            randomanswer1 = answer
            break
        case 2:
            randomanswer2 = answer
            break
        case 3:
            randomanswer3 = answer
            break
    }

    createCanvas(400, 400);
    background("black");
    fill("yellow")
    textSize(25)

    text(`${operand1}`, width / 3, height / 4)
    text(`${operand2}`, width / 8 * 5, height / 4)
    text(`${message}`, width / 2, height / 4)
    textAlign(CENTER)
    text(`${randomanswer2}`, width / 2, height / 2)
    text(`${randomanswer1}`, width / 3, height / 2)
    text(`${randomanswer3}`, width / 3 * 2, height / 2)

    // <<< TODO: Add your code here
}

// mouseClicked function checks if the user clicked on the correct answer
function mouseClicked() {
    fill("yellow")
    if (mouseX < width / 10 * 4 && mouseX > width / 12 * 3 && mouseY < height / 2 && mouseY > height / 12 * 5) {
        if (answer === randomanswer1) {
            textAlign(CENTER)
            textSize(30)
            fill("green")
            text(`${answer} ist richtig!`, width / 2, height / 3 * 2)
        }
        else {
            textAlign(CENTER)
            textSize(30)
            fill("red")
            text(`${randomanswer1} ist falsch!`, width / 2, height / 3 * 2)
        }
    }
    else if (mouseX < width / 12 * 7 && mouseX > width / 14 * 6 && mouseY < height / 2 && mouseY > height / 12 * 5) {
        if (answer === randomanswer2) {
            textAlign(CENTER)
            textSize(30)
            fill("green")
            text(`${answer} ist richtig`, width / 2, height / 3 * 2)
        }
        else {
            textAlign(CENTER)
            textSize(30)
            fill("red")
            text(`${randomanswer2} ist falsch!`, width / 2, height / 3 * 2)
        }
    }
    else if (mouseX < width / 12 * 9 && mouseX > width / 12 * 7 && mouseY < height / 2 && mouseY > height / 12 * 5) {
        if (answer === randomanswer3) {
            textAlign(CENTER)
            textSize(30)
            fill("green")
            text(`${answer} ist richtig!`, width / 2, height / 3 * 2)
        }
        else {
            textAlign(CENTER)
            textSize(30)
            fill("red")
            text(`${randomanswer3} ist falsch!`, width / 2, height / 3 * 2)
        }
    } // <<< TODO: Add your code here
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
