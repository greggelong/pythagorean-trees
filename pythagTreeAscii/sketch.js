let boxL;
let count = 0;
let angle = 45;
let myinput;
let phraseArr;

function setup() {
  createCanvas(600, 400);
  //colorMode(HSB);
  myinput = select('#input');
  myinput.position(10,420);
  myinput.changed(getBinSent);
  getBinSent();
  rectMode(CENTER);
  angleMode(DEGREES);
  textAlign(CENTER,CENTER);
  background(0);
  ellipse(20, 20, 20, 20);
  translate(width / 2, height - boxL / 2);
  frameRate(3);
  boxL = 0.125 * width;


}

function getBinSent() {

  // takes the imput value string
  // and converts it to an arrray of char codes a = 97 etc
  phraseArr = [];
  let tempArr = myinput.value().split("");
  for (const i of tempArr) {
    let charNum = i.charCodeAt(0);
    phraseArr.push(charNum);

  }
}

function draw() {
  //background(0); //instead of clearing background here I am using a cool
  fill(0, 60); // trick to slowly clear the screen as draws a rect over
  rect(width / 2, height / 2, width, height); // the whole screen with a low alpha. it leaves ghost like trails.
  translate(width / 2, height - boxL / 2);
  frameRate(3);
  // using modulo to cycle through the array so you can see the animation
  branch(phraseArr[frameCount % phraseArr.length], 75);

}


function branch(targetNumber, boxL) {
  // function takes in an interger converts it to a binary  string
  // then to an array and plots according to simple rules
  // the initial 1 is the start then if zero turn left if one turn right
  // finaly it prints the target number

  push();
  let binString = targetNumber.toString(2); // eg. 30 to '11110'
  let binArr = binString.split(""); // eg. '11110' to [1,1,1,1,0]
  binArr.shift(); // take off the first element it will always be 1 and the first square will be set directly

  // place the first square 
  translate(0, 0); // move to the bottom of screen 
  strokeWeight(1);
  count = count + 1 // increace the square count
  stroke(targetNumber, 0, 255);
  fill(targetNumber, 255, 0, 60);
  rect(0, 0, boxL, boxL); // gets x and y its postion from translate
  //stroke(0, 255, 0);
  //text(count, 0, 0); //

  for (const i of binArr) { // loops through the array


    if (i === "0") { //  
      let newLen = boxL / 1.4142 // divide len by sqrt(2): a2+b2 =c2
      // **** place a square to the left

      translate(-boxL / 2, -boxL); // need the old length to move to left corner of the previous square
      rotate(-angle); // rotate

      strokeWeight(1);
      count = count + 1 // increace the square count
      stroke(targetNumber, 0, 255);
      fill(targetNumber, 255, 0, 60);
      rect(0, 0, newLen, newLen); // gets x and y its postion from translate


    } else {
      //*** place a square to the right
      let newLen = boxL / 1.4142 // divide len by sqrt(2): a2+b2 =c2
      // **** place a square to the left
      // push(); // saves postion
      translate(boxL / 2, -boxL); // need the old length to move to left corner of the previous square
      rotate(angle); // rotate

      strokeWeight(1);
      count = count + 1 // increace the square count
      stroke(targetNumber, 0, 255);
      fill(targetNumber, 255, 0, 60);
      rect(0, 0, newLen, newLen); // gets x and y its postion from translate

    }
    boxL /= 1.4142;
  }
  //stroke(255, 0, 0);
  //rotate(count);
  
  pop();
  count = 0;
  textSize(50);
  text(String.fromCharCode(targetNumber), 0, 0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}