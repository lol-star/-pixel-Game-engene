function Pixel(WIDTH, HEIGHT, BGCOLOR) {
  
  var D = document;
  var canv = D.createElement('canvas');
  
  canv.style.position    = 'fixed';
  canv.style.width       = WIDTH + 'px';
  canv.style.height      = HEIGHT + 'px';
  canv.style.top         = 0 + 'px';
  canv.style.left        = 0 + 'px';
  canv.style.bacgroundColor   = BGCOLOR;
  
  D.body.appendChild(canv);
  
  var ctx = canv.getContext("2d");
}