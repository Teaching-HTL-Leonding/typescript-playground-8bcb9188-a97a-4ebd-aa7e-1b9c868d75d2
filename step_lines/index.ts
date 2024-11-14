function setup() {
    const SIZE = 400; // Canvas size (square)
    const GRID = 25; // Grid line distance

    createCanvas(SIZE, SIZE);
    background("black");

    strokeWeight(0.25);
    stroke("lightgray");

    // Draw vertical lines
    let i = GRID;
    while (i < SIZE) {
        line(i, 0, i, SIZE);
        i += GRID;
    }

    let o = GRID
    while (o < SIZE) {
        line(0, o, SIZE, o);
        o += GRID;
    }


    strokeWeight(2);

    let x = GRID
    let p = GRID
    while (p < SIZE && x < SIZE) {
    stroke("red")
        line(x, p, SIZE - GRID, p)
       stroke("yellow")
       line(x,p,GRID,p)
    
        p += GRID
        x += GRID
    }
    // Draw left part of the lines
    // <<< Write your code here

    // Draw right part of the lines
    // <<< Write your code here
}