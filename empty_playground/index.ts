function setup() {
    createCanvas(400, 400)
    background("white")
    textAlign(CENTER)
    textSize(50)
    text(`COOKIES 
0`, width / 2, 50)
    textSize(100)
    text(`🍪`, width / 2, height / 2)
}
let counter = 1
function mouseClicked() {

    if (mouseX >= 150 && mouseX <= 250 && mouseY >= 120 && mouseY <= 220) {
        counter *= 2

    }
noFill()
    background("white")
    textAlign(CENTER)
    textSize(50)
    text(`COOKIES 
${counter}`, width / 2, 50)
    textSize(100)
    text(`🍪`, width / 2, height / 2)
    if(counter>=100){
        noFill()
        strokeWeight(12)
        stroke("red")
        circle(width/2,height/2-35,120)
    }
}


