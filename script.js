var canvas;
let a = 0 
let diameter = 40;
let d = 300
let amount = 50

function preload() {
  grain = loadImage("/grain.png");
}

function setup() {
   
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.position(-9, -9);
    cnv.elt.style.position = "fixed"



  }
  
  function draw() {
    
    background(68,13,15)

    
    translate(windowWidth/2,windowHeight/2)
    //line
    
    for (let i = 0; i < width; i+= 3) {
      
      noStroke();
      scale(0.999)
      rotate(20) //simple rotation
      noFill();
      stroke(132,89,107);
      a
      // let offset = i*mouseY/6000;
      let y = sinMovment(sin(frameCount/50), -600,200, 0) 
      push();
     
      strokeWeight(0.5);
      circle(y,i,d)
      pop();    
      
    }
  
    // increment angle
    const increment = PI*2/50
    a += increment
  }
  
  //sinus function
  function sinMovment(angle, offset, minVal, maxVal) {
    let factor = sin(angle + offset*5)
    let sinMovementVal = map(factor, -1, -0.5, minVal, maxVal)
    return sinMovementVal;
  }
  
  