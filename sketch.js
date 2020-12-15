var h = hour();
var m = minute();
var s = second();
var hangle,mangle,sangle;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  hangle = map(h,0,12,0,360);
  mangle = map(m,0,60,0,360);
  sangle = map(s,0,60,0,360);

  stroke(255,0,0);
  strokeWeight(7);
  translate(0,0);
  line(0,0,100,0);
}