var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// for (var i = 0; i < 6; i++) {
//     for(j = 0;j < 6; j++){
//     ctx.fillStyle = `rgb(${255 - 42.5 * i}, ${255 - 42.5 * j}, ${42.5 * i})`      
//     ctx.fillRect(j * 25, i * 25, 25, 25);
//     }
// } dégradé arc-en-ciel

// ctx.fillStyle = 'rgba(138, 0, 0,0.5)';
// ctx.fillRect(30, 30, 100, 50);
// ctx.clearRect(0, 0,innerWidth,innerHeight);

// ctx.strokeRect(30, 30, 100, 50);

// ctx.beginPath();
// ctx.lineWidth = "10";
// ctx.strokeStyle = "green";
// ctx.rect(50, 50, 100, 100);
// ctx.stroke();

//dessiner un triangle
// ctx.beginPath();
// ctx.moveTo(75, 50);
// ctx.lineTo(100, 75);
// ctx.lineTo(100, 25);
// ctx.closePath();//pour éviter de réécrire le même ctx.lineTo(75, 50);
// ctx.lineTo(75, 50);
// ctx.stroke();
// ctx.fill(); remplir le triangle

ctx.beginPath();
ctx.arc(75, 75, 50, 0, Math.PI * 2);
ctx.moveTo(75, 75);
ctx.lineTo(125, 75);
ctx.stroke();
ctx.fillStyle= "red";
ctx.fill();