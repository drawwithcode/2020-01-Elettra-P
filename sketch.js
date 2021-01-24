let x, y;
let w_1, w_2, h_1, h_2;
let x_bounce = 1;
let y_bounce = 1;
let varLarp = 0;
let larp_direction = 1;




function setup() {
  createCanvas(windowWidth, windowHeight);
  background(162, 217, 206);

  x = width / 2;
  y = height / 2;
  w_1 = 3* width / 7;
  w_2 =  4 * width / 7;
  h_1 = 2*height / 5;
  h_2 = 3 * height / 5;
}


function draw() {

  if (frameCount%500==0){
  w_1-=width / 14;
  w_2+=width / 14;
  h_1-=height / 10;
  h_2+=height / 10;}
  let a = frameCount / 100;

  x = x + a * x_bounce;
  y = y + a * y_bounce;

  if (x < w_1 || x > w_2) {
    x_bounce *= -1;
  }
  if (y <h_1 || y > h_2) {

    y_bounce *= -1;
  }


  varLarp = varLarp + larp_direction * 0.003;
  if (varLarp > 1 || varLarp<0) {
    larp_direction *= -1;
  }

  push();
  stroke(lerpColor(color(162, 217, 206), color(62, 90, 118), varLarp))
  fill(lerpColor(color(62, 90, 118), color(162, 217, 206), varLarp));
  ellipseMode(CENTER);
  ellipse(x, y, a * 10);
  pop();
}
