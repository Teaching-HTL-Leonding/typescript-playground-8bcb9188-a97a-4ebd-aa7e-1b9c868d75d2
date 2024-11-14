function setup() {
    const SIZE = 400; // Canvas size (square)
    const GRID = 25; // Grid line distance

    createCanvas(SIZE, SIZE);
    background("black");

    strokeWeight(0.25);
    stroke("lightgray");

    // Draw vertical lines
    let i = GRID;
    let x=SIZE-GRID
    while (i < SIZE) {
        line(i, 0, i, SIZE);
        i += GRID;
    }

    // Draw horizontal lines
    i = GRID;
        while (i < SIZE) {
        strokeWeight(3)
        stroke("red")
        line(GRID,i,x,i)
        i += GRID;
    }
    while (i < SIZE) {
        line(0, i, SIZE, i);
        i += GRID;
    }

    strokeWeight(2);

    // Draw left part of the lines
    stroke("yellow");
    // <<< Write your code here

    // Draw right part of the lines
    // <<< Write your code here
}
