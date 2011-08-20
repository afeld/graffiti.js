/* @pjs preload="images/surfaces/2311918302_93a0bfc270_b.jpg"; */

PImage bgImage;

void setup(){
  size(1024,679);
  frameRate(30);
  // The background image must be the same size as the parameters
  // into the size() method.
  bgImage = loadImage("images/surfaces/2311918302_93a0bfc270_b.jpg");
  textFont(createFont("AmsterdamGraffitiRegular",32));
}

void draw(){
  background(bgImage);
  text('foo', width/2, height/2);
}
