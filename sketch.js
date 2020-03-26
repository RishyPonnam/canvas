var drawing = []
var point;
function setup() {
  createCanvas(800,400);
  var clearButton = select('#clearButton')
  clearButton.mousePressed(clearDrawing)
}
function mouseDragged(){
var point = {
  x:mouseX,
  y:mouseY
}
drawing.push(point)
}
function draw() {
  for(var i = 0; i<drawing.length; i++){
vertex(drawing[i][0],drawing[i][1])
  }
}
function keyPressed(){
  if(keyCode === 32){
    drawing = []

  }
}
function clearDrawing(){
 drawing = []
 drawing.length.remove(); 
}