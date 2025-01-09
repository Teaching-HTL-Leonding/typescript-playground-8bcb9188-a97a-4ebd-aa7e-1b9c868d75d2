
const CONFIGURATION = "5;0-360";

let lineStartX: number[] = [];
let lineStartY: number[] = [];
let lineEndX: number[] = [];
let lineEndY: number[] = [];
let lineColor: number[] = [];
let lineStartDX: number[] = [];
let lineStartDY: number[] = [];
let lineEndDX: number[] = [];
let lineEndDY: number[] = [];
let lines: number[] = [5]

let minColor = 0
let maxColor = 360



function setup() {
    createCanvas(500, 500);
    colorMode(HSB);
    for (let i = 0; i < lines[0]; i++) {

        lineStartX.push(random(50, 450))
        lineStartY.push(random(50, 450))
        lineEndX.push(random(50, 450))
        lineEndY.push(random(50, 450))

        lineStartDX.push(random(0, 5))
        lineStartDY.push(random(0, 5))
        lineEndDX.push(random(0, 5))
        lineEndDY.push(random(0, 5))



        lineColor.push(random(minColor, maxColor))
    }




}
function draw() {
    background("black")
    rect(10,10,50,50)
    rect(70,10,50,50)
    for (let i = 0; i < lines[0]; i++) {
        push()
        stroke(lineColor[i], 100, 100);
        strokeWeight(2);
        line(lineStartX[i], lineStartY[i], lineEndX[i], lineEndY[i]);

        lineStartX[i] += lineStartDX[i]
        lineStartY[i] += lineStartDY[i]
        lineEndX[i] += lineEndDX[i]
        lineEndY[i] += lineEndDY[i]

        if (lineStartX[i] < 0 || lineStartX[i] > width) {
            lineStartDX[i] = -lineStartDX[i]
        }
        if (lineStartY[i] < 0 || lineStartY[i] > width) {
            lineStartDY[i] = -lineStartDY[i]
        }
        if (lineEndX[i] < 0 || lineEndX[i] > width) {
            lineEndDX[i] = -lineEndDX[i]
        }
        if (lineEndY[i] < 0 || lineEndY[i] > width) {
            lineEndDY[i] = -lineEndDY[i]
        }
        pop()
    }

}
function mouseClicked(){
    if(mouseX<60&&mouseX>10&&mouseY<60&&mouseY>10){
                lineStartX.push(random(50, 450))
        lineStartY.push(random(50, 450))
        lineEndX.push(random(50, 450))
        lineEndY.push(random(50, 450))

        lineStartDX.push(random(0, 5))
        lineStartDY.push(random(0, 5))
        lineEndDX.push(random(0, 5))
        lineEndDY.push(random(0, 5))



        lineColor.push(random(minColor, maxColor))
        lines[0]++
    }
        if(mouseX<120&&mouseX>70&&mouseY<60&&mouseY>10){
                lineStartX.splice(random(50, 450))
        lineStartY.splice(random(50, 450))
        lineEndX.splice(random(50, 450))
        lineEndY.splice(random(50, 450))

        lineStartDX.splice(random(0, 5))
        lineStartDY.splice(random(0, 5))
        lineEndDX.splice(random(0, 5))
        lineEndDY.splice(random(0, 5))



        lineColor.push(random(minColor, maxColor))
        
    }
}
