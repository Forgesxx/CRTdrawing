function drawCRT() 
{
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.strokeStyle = "lime";
  ctx.moveTo(20, 75);
  ctx.lineTo(230, 75);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "";
  ctx.moveTo(20, 125);
  ctx.lineTo(230, 125);
  ctx.stroke();


  ctx.beginPath();
  ctx.moveTo(20, 125);
  ctx.lineTo (20, 75);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(230, 125);
  ctx.lineTo (350, 180);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(230, 75);
  ctx.lineTo (350, 20);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(350, 20);
  ctx.lineTo (350, 180);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(150, 75);
  ctx.lineTo (150, 90);
  ctx.stroke();


  ctx.beginPath();
  ctx.moveTo(150, 110);
  ctx.lineTo (150, 125);
  ctx.stroke();


  ctx.beginPath();
  ctx.moveTo(150, 110);
  ctx.lineTo (150, 150);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(60, 150);
  ctx.lineTo (150, 150);
  ctx.stroke();

  
  ctx.beginPath();
  ctx.moveTo(195,110);
  ctx.lineTo (195, 150);
  ctx.stroke();


  ctx.beginPath();
  ctx.moveTo(195, 90);
  ctx.lineTo (195, 50);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(210, 90);
  ctx.lineTo (180, 90);
  ctx.stroke();


  ctx.beginPath();
  ctx.moveTo(210, 110);
  ctx.lineTo (180, 110);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(10, 110);
  ctx.lineTo (10, 150);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(10, 150);
  ctx.lineTo (15, 150);
  ctx.stroke();

  
  ctx.beginPath();
  ctx.moveTo(10, 110);
  ctx.lineTo (25, 110);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(25, 85);
  ctx.lineTo (25, 110);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "#FF2000"
  ctx.moveTo(20, 100);
  ctx.lineTo (350, 100);
  ctx.stroke(); 

  ctx.beginPath();
  ctx.strokeStyle = "white"
  ctx.moveTo(25, 45);
  ctx.lineTo (25, 85);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(150, 45);
  ctx.lineTo (150, 75);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(30, 55);
  ctx.lineTo (145, 55);
  ctx.stroke();


  ctx.beginPath();
  ctx.moveTo(30, 55);
  ctx.lineTo (35, 52);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(30, 55);
  ctx.lineTo (35, 58);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(145, 55);
  ctx.lineTo (140, 58);
  ctx.stroke();


  ctx.beginPath();
  ctx.moveTo(145, 55);
  ctx.lineTo (140, 52);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(180, 45);
  ctx.lineTo (210, 45);
  ctx.stroke();

  
  ctx.beginPath();
  ctx.moveTo(180, 45);
  ctx.lineTo (210, 45);
  ctx.stroke();

  ctx.font = "10px Arial";
  ctx.fillStyle = "Yellow";
  ctx.fillText("H", 80, 50);




}


drawCRT();




