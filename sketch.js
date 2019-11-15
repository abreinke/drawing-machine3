function setup() {
  createCanvas(500, 500);
  background(0, 0, 0);
  stroke(100, 100, 100);
  strokeWeight(50);
}

function draw() {
  if (mouseIsPressed) {
  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  line(mouseX, mouseY, pmouseX, pmouseY);
    }
    return false;
  }

  function keyTyped() {
    if (key === 'r'){
      stroke(253, 49, 85);
    } else if (key === 'y') {
      stroke(255, 247, 36);
    } else if (key = 'b') {
      stroke(181, 255, 255);
    }
}

function preload() {
  photo = loadImage('assets/sketch.jpg');
}

function draw() {
  image(photo, 0, 0);
}

function keyTyped() {
  if (key === 's') {
    photo.save('sketch', 'png');
  }
}
