
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d')
let imageElement = document.querySelector('#roku');


function drawRect (x,y){
  //ctx.strokeRect(x,y,250,100);
  ctx.drawImage(imageElement, x, y, 250, 100);
  //ctx.fillRect(images/download.png,x,y,250)
};

let x= 100;
  
let y= 100;

export function animate (){

  if (x>canvas.width) {
    x=0;
  };

  if (y>canvas.height) {
     y=0;
  };
  x=x+10
  y=y+10
  ctx.clearRect(0,0,canvas.width,canvas.height)
  drawRect(x,y);
  window.requestAnimationFrame(animate)
  

};