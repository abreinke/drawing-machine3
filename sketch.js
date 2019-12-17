let cricketSound;
function preload(){
  soundFormats('mp3');
  cricketSound = loadSound('crickets.mp3');
}

function setup(){
  soundVolume = 0.5;
  cricketSound.setVolume(soundVolume);
}

var saveCount = 0;
function setup() {
  createCanvas(875, 500);
  background(81, 81, 81);
  stroke(253, 49, 85);
  strokeWeight(50);
}

function keyTyped(){
  if (key == 'c'){
  cricketSound.play();
} else if (key == 'p') {
  cricketSound.pause();
}
}

function draw() {
  if (mouseIsPressed) {
  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  line(mouseX, mouseY, pmouseX, pmouseY);
    }
    return false;
  }

  function keyTyped() {
    if (key === 'y'){
      stroke(255, 247, 36);
    } else if (key === 'b') {
      stroke(181, 255, 255);
    } else if (key === 'd') {
      stroke(253, 49, 85);
      }
  }

  function keyPressed() {
    if (key === 'x') {
      save("screenshot" +
     saveCount +".png");
     saveCount++;
      }
  }
