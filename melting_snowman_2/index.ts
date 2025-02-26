const MAX_WRONG_GUESSES = 10;


const wordToGuess = "Winterwald";
let currentWordStatus: string;
let font: any;
let wrongGuesses = 0;

let acceptKeys = true;

function getInitialCurrentWord(wordToGuess: string): string {
    let currentWordStatus = "";
    for (let i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess[i] != " ") {
            currentWordStatus += "_";
        } else {
            currentWordStatus += " ";
        }
    }

    return currentWordStatus;
}


function guessKey(key: string, wordToGuess: string, currentWordStatus: string): string {
    const lowerKey = key.toLowerCase();

    let newCurrentWordStatus = "";
    for (let i = 0; i < wordToGuess.length; i++) {
        const lowerChar = wordToGuess[i].toLowerCase();
        if (lowerChar === lowerKey) {
            newCurrentWordStatus += wordToGuess[i];
        } else {
            newCurrentWordStatus += currentWordStatus[i];
        }
    }

    return newCurrentWordStatus;
}

function preload() {
    font = loadFont("https://cddataexchange.blob.core.windows.net/images/SyneMono-Regular.ttf");
}

function setup() {
    
    currentWordStatus = getInitialCurrentWord(wordToGuess);

    createCanvas(800, 500);
    angleMode(DEGREES);

   
    redraw();
    noLoop(); 
}

function draw() {
    background("white");

    if (currentWordStatus === wordToGuess) {
      
        acceptKeys = false;
        drawResult(true, wrongGuesses);
    } else if (wrongGuesses === MAX_WRONG_GUESSES) {
       
        acceptKeys = false;
        drawResult(false, wrongGuesses);
    } else {
      
        drawSnowman(wrongGuesses);
        drawCurrentWordStatus(font, currentWordStatus);
    }

}

function keyPressed() {
    
    if (!acceptKeys) { return; } 
    const newCurrentWordStatus = guessKey(key, wordToGuess, currentWordStatus);
    if (currentWordStatus === newCurrentWordStatus) {
        wrongGuesses++;
    }
    currentWordStatus = newCurrentWordStatus;
    redraw();
}


function drawResult(win: boolean, wrongGuesses: number) {
    push();
    textAlign(CENTER, CENTER);
    if (win) {
        fill("green");
    } else {
        fill("red");
    }
    noStroke();
    textSize(65);
    textFont(font);
    let message = "Game Over";
    if (win) {
        switch (wrongGuesses) {
            case 0:
                message = "No wrong guesses!";
                break;
            case 1:
                message = "One wrong guess!";
                break;
            default:
                message = `${wrongGuesses} wrong guesses.`;
                break;
        }
    }
    text(message, width / 2, height / 2);
    pop();
}


function drawSnowman(numberOfWrongGuesses: number) {
    translate(130, 0);
    push();
    stroke("black");
    strokeWeight(2);
    fill("aliceblue")
    if (numberOfWrongGuesses < 10) {
        circle(0, 350, 250);
    }
    if (numberOfWrongGuesses < 9) {
        circle(0, 175, 150);
    }
    pop();

    push();
    noStroke();
    fill("black");
    if (numberOfWrongGuesses < 6) {
        circle(-25, 150, 25);
    }
    if (numberOfWrongGuesses < 7) {
        circle(25, 150, 25);
    }
    pop();

    if (numberOfWrongGuesses < 4) {
        push();
        noStroke();
        fill("orange");
        triangle(0, 195, 0, 165, 40, 180);
        pop();
    }

    push();
    fill("black");
    translate(0, 180);
    rotate(45);
    let start = 0;
    if (numberOfWrongGuesses >= 5) {
        start = 6;
    } else if (numberOfWrongGuesses >= 3) {
        start = 3;
    }
    for (let i = start; i < 6; i++) {
        circle(40, 0, 12);
        rotate(18);
    }
    pop();

    push();
    start = 0;
    if (numberOfWrongGuesses >= 2) {
        start = 6;
    } else if (numberOfWrongGuesses >= 1) {
        start = 3;
    }
    for (let i = start; i < 6; i++) {
        noStroke();
        fill("black");
        circle(0, 275, 15);
        translate(0, 25);
    }
    pop();

    if (numberOfWrongGuesses < 8) {
        push();
        noStroke();
        fill("black");
        rect(-85, 110, 170, 10);
        rect(-50, 50, 100, 60);
        pop();
    }
}

function drawCurrentWordStatus(font: any, currentWordStatus: string) {
    push();
    textAlign(LEFT, BOTTOM);
    translate(225, 0);

    fill("dodgerblue");
    noStroke();
    textSize(45);
    textFont(font);
    text(currentWordStatus, 0, 250);
    pop();
}