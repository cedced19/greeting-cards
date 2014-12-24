var message = window.location.hash.replace('#', '').replace(/%20/g, ' ').replace(/%C3%AB/g, 'ë');
document.getElementById('message').textContent = message;

var canvas = document.getElementById('hearth');
var context = canvas.getContext('2d');

context.translate(100,100);

context.strokeStyle = '#FF0000';
context.lineWidth = 5;

context.beginPath();
context.arc(0, 0, 50, 90*(Math.PI/180), 0, false);
context.stroke();
context.closePath();

context.beginPath();
context.arc(0, 100, 50, 270*(Math.PI/180), 0, false);
context.stroke();
context.closePath();

context.beginPath();
context.arc(100, 0, 50, Math.PI, 90*(Math.PI/180), false);
context.stroke();
context.closePath();

context.beginPath();
context.arc(100, 100, 50, 180*(Math.PI/180), 270*(Math.PI/180), false);
context.stroke();
context.closePath();