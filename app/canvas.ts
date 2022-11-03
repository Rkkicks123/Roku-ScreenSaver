export const canvas=  document.createElement('canvas');
export const ctx = canvas.getContext('2d');
document.querySelector('#app').appendChild(canvas);

canvas.width = window.innerWidth
canvas.height = window.innerHeight
canvas.style.border = '2px solid blue';
canvas.style.display = 'block';
canvas.style.margin = 'auto';