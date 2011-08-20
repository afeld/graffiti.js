/* @pjs preload="images/surfaces/2311918302_93a0bfc270_b.jpg"; */

// SURFACE_PHOTOS = [
//   'http://farm4.static.flickr.com/3055/2311918302_93a0bfc270_b.jpg',
//   'http://farm4.static.flickr.com/3575/3351124889_7b16399c2b_o.jpg'
// ]

PImage bgImage;

void setup(){
  size(1024,679);
  frameRate(30);
  // The background image must be the same size as the parameters
  // into the size() method.
  bgImage = loadImage("images/surfaces/2311918302_93a0bfc270_b.jpg");
}

void draw(){
  background(bgImage);
}
