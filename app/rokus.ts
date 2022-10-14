
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d')
let imageElement = document.querySelector('#roku');


export function drawRect (x,y){
  //ctx.strokeRect(x,y,250,100);
  ctx.drawImage(imageElement, x, y, 250, 100);
  //ctx.fillStyle = "#6A0DAD";
  //ctx.fillRect(x, y, 15, 10);
};





export function drawRect2 (axis,height){
  //ctx.strokeRect(x,y,250,100);
  ctx.drawImage(imageElement, axis, height, 250, 100);
  //ctx.fillRect(images/download.png,x,y,250)
};

export function drawRect3 (ax,ht){
  //ctx.strokeRect(x,y,250,100);
  ctx.drawImage(imageElement, ax, ht, 250, 100);
  //ctx.fillRect(images/download.png,x,y,250)
};

export function drawRect4 (a,h){
  //ctx.strokeRect(x,y,250,100);
  ctx.drawImage(imageElement, a, h, 250, 100);
  //ctx.fillRect(images/download.png,x,y,250)
};

export function drawRain (b,c){
  ctx.fillStyle = "#6A0DAD";
  ctx.fillRect(b, c, 5, 20);
};
