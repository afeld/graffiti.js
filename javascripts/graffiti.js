var Graffiti = {
  WIDTH: 800,
  HEIGHT: 600,
  STROKE_WIDTH: 5,
  OPACITY: 0.7,
  
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
  drips: [],
  
  init: function(){
    this.paper = Raphael(0, 0, this.WIDTH, this.HEIGHT);
    
    var background = this.SURFACE_PHOTOS[0];
    this.backgroundImage = this.paper.image(background.src, 0, 0, this.paper.width, this.paper.height);
    
    this.redrawText();
    this.randomDrip(this.textObj);
  },
  
  getPath: function(obj){
    return obj.getSubpath(0, obj.getTotalLength());
  },
  
  randomDrip: function(obj){
    if (obj.type === 'set'){
      for (var i = 0; i < obj.length; i++){
        var item = obj[i];
        this.randomDrip(item);
      }
    } else {
      var pathLength = obj.getTotalLength(),
        start = obj.getPointAtLength( Math.random() * pathLength ),
        strokeWidth = obj.attrs['stroke-width'] || this.STROKE_WIDTH,
        strokeColor = obj.attrs.stroke,
        drip = this.paper
          .rect(start.x, start.y, strokeWidth, strokeWidth, strokeWidth/2)
          .attr({
            fill: strokeColor,
            stroke: strokeColor
          }).
          animate({height: 100 * Math.random()}, 15000, '>');
      
      this.drips.push(drip);
    }
  },
  
  redrawText: function(){
    var font = this.paper.getFont("Amsterdam Graffiti", 800),
      textColor = this.randomColor(),
      strokeColor;
    
    if ((textColor[0] + textColor[1] + textColor[2]) > (255 * 3 / 2)){
      strokeColor = 'black';
    } else {
      strokeColor = 'white';
    }
    
    this.textObj = this.paper
      .print(this.paper.width*0.1, this.paper.height/2, this.sourceText, font, 200)
      .attr({
        fill: 'rgb(' + textColor.join(',') + ')',
        'fill-opacity': this.OPACITY,
        stroke: strokeColor,
        'stroke-width': this.STROKE_WIDTH,
      });
  },
  
  randomColor: function(){
    return [ Math.random()*255, Math.random()*255, Math.random()*255 ];
  }
};

$(function(){
  Graffiti.init();
});
