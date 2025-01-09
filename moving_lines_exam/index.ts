
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
  let lines: number[]=[5]

let minColor=0
let maxColor=360



function setup() {
    createCanvas(500, 500);
    colorMode(HSB);
for(let i=0;i < lines[0];i++){

lineStartX.push(random(50,450))
lineStartY.push(random(50,450))
lineEndX.push(random(50,450))
lineEndY.push(random(50,450))

lineStartDX.push(random(0,5))
lineStartDY.push(random(0,5))
lineEndDX.push(random(0,5))
lineEndDY.push(random(0,5))



lineColor.push(random(minColor,maxColor))
}

    
    

}
function draw() {
background("black")
for(let i = 0;i<10;i++){
    push()
        stroke(lineColor[i], 100, 100);
    strokeWeight(2);
    line(lineStartX[i], lineStartY[i], lineEndX[i], lineEndY[i]);

    lineStartX[i]+=lineStartDX[i]
}
  
}
