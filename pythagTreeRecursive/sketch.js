let angle = 45;
let count = 0;
let boxL = 75


function setup() {
  createCanvas(600, 400);
  background(0);
  angleMode(DEGREES);
  rectMode(CENTER);
  //translate(width / 2, height); // move to the bottom of screen

}

function draw() {

  translate(width / 2, height - boxL / 2); // move to the bottom of screen 
  stroke(0, 255, 0);
  noFill();
  branch(boxL); // calls branch function with size
  print(count);
  noLoop();
}

function branch(len) {
  strokeWeight(1);
  count = count + 1 // increace the square count
  stroke(255, 255, 0);
  fill(255, 255, 0, 50);
  rect(0, 0, len, len); // gets x and y its postion from translate
  stroke(0, 255, 0);
  text(count, 0, 0); //
 if(len >15){  // exit condition for the recursion change for more or less depth
  let newLen = len / 1.4142 // divide len by sqrt(2): a2+b2 =c2
  // **** place a square to the left
  push(); // saves postion
  translate(-len / 2, -len); // need the old length to move to left corner of the previous square
  rotate(-angle); // rotate
  branch(newLen)  // recursive call
  pop(); // pops back to old position
  //*** place a square to the right
  push(); // saves position
  translate(len / 2, -len); // need the old lenth to move to the right corner of the previous square
  rotate(+angle); // rotate
  branch(newLen) // recursive call
   pop() // pops back to old postion
 }
}