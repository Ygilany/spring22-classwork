const canvas = document.getElementById(`my-canvas`);

const context = canvas.getContext(`2d`);

function drawFace() {
  context.beginPath();
  context.arc(75, 75, 50, 0, 2* Math.PI, false);
  context.closePath();
  context.fillStyle = "yellow";
  context.fill();
}
drawFace();

function drawSmile() {
  context.beginPath();
  context.arc(75, 75, 35, 0, Math.PI, false);
  context.strokeStyle = "black";
  context.stroke();
  context.closePath();
}
drawSmile();

(function drawEyes() {
  // The first eye
  context.beginPath();
  context.arc(65, 65, 5, 0, 2 * Math.PI, false);
  context.closePath();
  context.fillStyle = "black";
  context.fill();

  // The other eye
  context.beginPath();
  context.arc(90, 65, 5, 0, 2 * Math.PI, false);
  context.closePath();
  context.fillStyle = "black";
  context.fill();
})()

(function drawBody(){
  context.beginPath();
  context.line()
})()
