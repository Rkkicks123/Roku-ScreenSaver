//Imports:

import {drawRect} from './rokus'



//Structure:

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d')
let imageElement = document.querySelector('#roku');


//Assigning Variables:

let x= 50;
  
let y= 35;

let axis= 1100;
  
let height= 200;

let ax= 400;
  
let ht= 50;

let a= 700;
  
let h= 150;

let b = 50;

let c= 1;

//Animate:
export function animate (){
  
//Stop from going forever:
  if (x>canvas.width) {
    x=0;
  };

  if (y>canvas.height) {
     y=0;
  };
  if (axis>canvas.width) {
    axis=0;
  };

  if (height>canvas.height) {
     height=0;
  };
  if (ax>canvas.width) {
    ax=0;
  };

  if (ht>canvas.height) {
     ht=0;
  };
  if (a>canvas.width) {
    a=0;
  };

  if (b>canvas.height) {
     b=0;
  };
  if (c>canvas.height) {
     c=0;
  };
  
  //Speed:
  x=x+0
  y=y+5
  axis=axis+0
  height=height+6
  ax=ax+0
  ht=ht+7
  a=a+0
  h=h+8
  b=b+0
  c=c+5

  //draing part:
  
  ctx.clearRect(0,0,canvas.width,canvas.height)
  //ctx.rotate(Math.PI*42/180)
  drawRect(x,y);
  drawRect(axis,height);
  drawRect(ax,ht);
  drawRect(a,h);
  window.requestAnimationFrame(animate)
  

};










//let background = HTMLCanvasElement
//function changeBackground(element, hexcode){
 // element.style.backgroundColor = hexcode;
//}
//window.setInterval(changeBackground(background,'#dd0300'), 2000)