let inpout:string=""
const MARGIN_NUM = 10;

let num: number = 0;          // Current number entered by the user
let lineHeight: number = 0;   // Height of a line of the responsive layout
let cellWidth: number = 0;    // Width of a cell of the responsive layout

function setup() {
    createCanvas(500, 500);
    lineHeight = height / 5;
    cellWidth = width / 3;

}

function draw() {
    background("lightgray");
    line(0,lineHeight,width,lineHeight);
    line(0,lineHeight*2,width,lineHeight*2)
    line(0,lineHeight*3,width,lineHeight*3)
    line(0,lineHeight*4,width,lineHeight*4)
    line(cellWidth,lineHeight,cellWidth,lineHeight*4)
    line(cellWidth*2,lineHeight,cellWidth*2,lineHeight*5)
    textSize(75)
    textAlign(CENTER,CENTER)
    text("7",cellWidth/2,lineHeight*1.5)
    text("8",cellWidth*1.5,lineHeight*1.5)
    text("9",cellWidth*2.5,lineHeight*1.5)
    text("4",cellWidth/2,lineHeight*2.5)
    text("5",cellWidth*1.5,lineHeight*2.5)
    text("6",cellWidth*2.5,lineHeight*2.5)
    text("1",cellWidth/2,lineHeight*3.5)
    text("2",cellWidth*1.5,lineHeight*3.5)
    text("3",cellWidth*2.5,lineHeight*3.5)
    text("0",cellWidth,lineHeight*4.5)
    text("C",cellWidth*2.5,lineHeight*4.5)
    rect(width/10*0.5,height/10*0.3,cellWidth*2.7,lineHeight*0.7)

    // <<< Add code here
}
function mouseClicked() {

    // <<< Add code here
}
