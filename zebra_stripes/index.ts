function setup() {
    const SIZE = 400;  // Size of canvas
    const STRIPE_THICKNESS = 50; // Thickness of the stripes
    let y1 = 50
    let y2 = 0
    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();
    while (y1 < SIZE && y2 < SIZE) {
        fill("yellow")
        rect(0, y1, SIZE, STRIPE_THICKNESS)
        fill("green")
        rect(0, y2, SIZE, STRIPE_THICKNESS)
        y2 += 100
        y1 += 100
    }

    // <<< Add your code here
}
