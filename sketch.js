// var saveCount=0;
function setup() {
  createCanvas(500, 500);
  fill(254, 249, 240);
  stroke(31, 31, 31);
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

// function keyPressed(){
//   if (key == 'x'){
//     save("screenshot" +
//   saveCount +".png");
//   saveCount++;
//   }
// }
