
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d')
let imageElement = document.querySelector('#roku');


export function drawRect (x,y){
  //ctx.strokeRect(x,y,250,100);
  ctx.drawImage(imageElement, x, y, 250, 100);
  //ctx.fillStyle = "#6A0DAD";
  //ctx.fillRect(x, y, 15, 10);
};

export function drawRain (b,c){
  ctx.fillStyle = "#6A0DAD";
  ctx.fillRect(b, c, 5, 20);
};
