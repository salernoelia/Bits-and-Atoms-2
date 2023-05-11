var canvas;

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.position(-9, -9);

  }
  
  function draw() {
    background(0);
    translate(width/2, height/2)
    ellipseMode(CENTER);
    noStroke()
    fill(50)
  
    for (let i = 0; i < 200; i+= 2) {
      rotate(sin(frameCount/50))
      circ(0+i%4,0+i*frameCount/30,i/6);
      circ(0+-i%20,0+-i*frameCount/10,-i/20);
    }
    
    if (frameCount > 300) {
      frameCount = -frameCount
    }
  }
  
  function circ(x,y,dia) {
    // ellipse(x,y,dia/x,dia/y)
    // ellipse(-x,-y,dia/x,dia/y)
    // ellipse(x*sin(frameCount/60),y*sin(frameCount/60),dia,dia)
    // ellipse(-x*sin(frameCount/60),-y*sin(frameCount/60),dia,dia)
    text("hi",x,y)
    text("hi",-x,-y)
    
    // push()
    // rotate(80)
    // ellipse(x,y,dia,dia)
    // ellipse(-x,-y,dia,dia)
    // pop()
  }
  
  