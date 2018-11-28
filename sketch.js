var circle = 200;
var rot;
var col;
var freq = 0.00001;
var cont = 0;
var r;
var z;
var mySong;

function preload() {
  mySong = loadSound("./assets/silence.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  a = 0;

  analyser = new p5.Amplitude();
  analyser.setInput(mySong);
  mySong.play();
}

function draw() {

  var x = map(mouseX, 0, width, 1, 1.5)
  translate(width / 2, height / 2);

  var volume = analyser.getLevel();
  z = map(volume, 0, 1, 100, 450);

  background(200);
  fill(255, 0, 74, 90);
  stroke(255, 0, 74);

  var angle = map(mouseX, 0, 20, 0, PI);
  var cos_a = cos(angle);
  var sin_a = sin(angle);
  applyMatrix(cos_a, sin_a, -sin_a, cos_a, 0, 0);


  ellipseMode(RADIUS);
  for (var i = 0; i < z; i++) {
    circle = z / 1.5 + 50 * cos(millis() * freq * i);
    col = map(circle, 150, 250, 255, 100);
    r = map(circle, 150, 250, 1, 3.5);
    fill(col, 20, 120);
    strokeWeight(r / 5);
    stroke(col, 0, 74, 70);
    ellipse(circle * cos(i), circle * sin(i), r * x, r * x);
    line(circle * cos(i), circle * sin(i), circle * cos(i - 3), circle * sin(i - 3));
    rot = rot + 0.00005;
    translate(a / 100, a / 100);
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
