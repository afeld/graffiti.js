var Graffiti = {
  WIDTH: 800,
  HEIGHT: 600,
  SURFACE_PHOTOS: [
    {
      src: 'http://farm4.static.flickr.com/3055/2311918302_93a0bfc270_b.jpg',
      width: 1024,
      height: 679
    },
    {
      src: 'http://farm4.static.flickr.com/3575/3351124889_7b16399c2b_o.jpg',
      width: 700,
      height: 525
    }
  ],
  
  paper: undefined,
  backgroundImage: undefined,
  sourceText: 'Graffiti.js',
  textObj: undefined,
  
  init: function(){
    this.paper = Raphael(0, 0, this.WIDTH, this.HEIGHT);
    
    var background = this.SURFACE_PHOTOS[0];
    this.backgroundImage = this.paper.image(background.src, 0, 0, this.paper.width, this.paper.height);
     
    this.redrawText();
  },
  
  redrawText: function(){
    var font = this.paper.getFont("Amsterdam Graffiti", 800),
      textObj = this.paper.print(50, this.paper.height/2, this.sourceText, font, 200);
    
    textObj.attr({fill: 'white'});
    this.textObj = textObj;
  }
};

$(function(){
  Graffiti.init();
});
