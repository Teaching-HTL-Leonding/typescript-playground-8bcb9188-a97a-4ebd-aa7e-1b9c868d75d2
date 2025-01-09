
const CONFIGURATION = "5;0-360";

let lineStart: number[] = [0,0];    
let lineEnd: number[] = [0,0];      
let lineColor: number = 0;          

let lineStartDeltas: number[] = [0,0]; 
let lineEndDeltas: number[] = [0,0];   

let colorRange: number[] = [0, 360];   
let lines: number[]=[0,5]


function setup() {
    createCanvas(500, 500);
    colorMode(HSB);
    
   push()
    lineStart[0] = random(50, 450);  
    lineStart[1] = random(50, 450);  
    lineEnd[0] = random(50, 450);    
    lineEnd[1] = random(50, 450);    


    lineStartDeltas[0] = random(0, 5);  
    lineStartDeltas[1] = random(0, 5);  
    lineEndDeltas[0] = random(0, 5);    
    lineEndDeltas[1] = random(0, 5);    

    
    lineColor = random(colorRange[0], colorRange[1]); 
    pop()

    
    

}
function draw() {
    background("black");
    rect(10,10,50,50)
    rect(70,10,50,50)
    textSize(30)
    text(`➕`,15,45)
    text(`➖`,75,45)
    push();
   
    stroke(lineColor, 100, 100);
    strokeWeight(2);
    line(lineStart[0], lineStart[1], lineEnd[0], lineEnd[1]);



    lineStart[0] += lineStartDeltas[0]; 
    lineStart[1] += lineStartDeltas[1];
    lineEnd[0] += lineEndDeltas[0];     
    lineEnd[1] += lineEndDeltas[1];     

   
    if (lineStart[0] < 0 || lineStart[0] > width) {
        lineStartDeltas[0] = -lineStartDeltas[0];
    }
    if (lineStart[1] < 0 || lineStart[1] > height) {
        lineStartDeltas[1] = -lineStartDeltas[1];
    }

    if (lineEnd[0] < 0 || lineEnd[0] > width) {
        lineEndDeltas[0] = -lineEndDeltas[0];
    }
    if (lineEnd[1] < 0 || lineEnd[1] > height) {
        lineEndDeltas[1] = -lineEndDeltas[1];
    }

    pop();
  
}
function mouseClicked(){
    if(mouseX<60&&mouseX>10&&mouseY<60&&mouseY>60){
          push();
   
    stroke(lineColor, 100, 100);
    strokeWeight(2);
    line(lineStart[0], lineStart[1], lineEnd[0], lineEnd[1]);

  
    lineStart[0] += lineStartDeltas[0]; 
    lineStart[1] += lineStartDeltas[1];
    lineEnd[0] += lineEndDeltas[0];     
    lineEnd[1] += lineEndDeltas[1];     

   
    if (lineStart[0] < 0 || lineStart[0] > width) {
        lineStartDeltas[0] = -lineStartDeltas[0];
    }
    if (lineStart[1] < 0 || lineStart[1] > height) {
        lineStartDeltas[1] = -lineStartDeltas[1];
    }

    if (lineEnd[0] < 0 || lineEnd[0] > width) {
        lineEndDeltas[0] = -lineEndDeltas[0];
    }
    if (lineEnd[1] < 0 || lineEnd[1] > height) {
        lineEndDeltas[1] = -lineEndDeltas[1];
    }

    pop();  
    }
}