function preload() {

}

var varLarp;

function setup() {
  varLarp = 0;

}


function draw() {
  var ellipseWidth = 60;

  createCanvas(windowWidth, windowHeight);
  background(lerpColor(color(62, 90, 118), color(162, 217, 206), varLarp));
  noStroke();
  varLarp += 0.003;
  if (varLarp > 1) {
    varLarp = 0
  }
  fill(lerpColor(color(162, 217, 206), color(62, 90, 118), varLarp));


  var w = windowWidth;
  var h = windowHeight;
  var i;
  var j;

  for (j = 0; j < h; j += 40) {


    for (i = 0; i < w; i += 40) {


      ellipseWidth = abs(mouseX - i);

      if (ellipseWidth > 60) {
        ellipseWidth = 60
      }

       ellipse(i, j, ellipseWidth);
    }
  }


}
