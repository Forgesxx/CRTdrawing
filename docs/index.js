//TODO: All drawing code should be moved to view.js

// function mainTubePart() 
// {
//   var canvas = document.getElementById('canvas');
//   var ctx = canvas.getContext('2d');
// //Main tube part
//   ctx.beginPath();
//   ctx.strokeStyle = "lime";
//   ctx.moveTo(20, 75);
//   ctx.lineTo(((canvas.width * 57.5) / 100), 75);
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.strokeStyle = "";
//   ctx.moveTo(20, 125);
//   ctx.lineTo(230, 125);
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.moveTo(20, 125);
//   ctx.lineTo (20, 75);
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.moveTo(230, 125);
//   ctx.lineTo (350, 180);
//   ctx.stroke();
  
//   ctx.beginPath();
//   ctx.moveTo(230, 75);
//   ctx.lineTo (350, 20);
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.moveTo(350, 20);
//   ctx.lineTo (350, 180);
//   ctx.stroke();
// }

// function Catodes() 
// {
//   var canvas = document.getElementById('canvas');
//   var ctx = canvas.getContext('2d');

//   //Catodes
//   ctx.beginPath();
//   ctx.moveTo(150, 75);
//   ctx.lineTo (150, 90);
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.moveTo(150, 110);
//   ctx.lineTo (150, 125);
//   ctx.stroke();
// }

// // TODO: it shouldn't be "other". What is "other"? Is a part of what? Name it, or move it to the component it belongs to.
// function other() 
// {
//   var canvas = document.getElementById('canvas');
//   var ctx = canvas.getContext('2d');

//   //other
//   ctx.beginPath();
//   ctx.moveTo(150, 125);
//   ctx.lineTo (150, 150);
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.moveTo(60, 150);
//   ctx.lineTo (150, 150);
//   ctx.stroke();
// }

// function plastinas() 
// {
//   var canvas = document.getElementById('canvas');
//   var ctx = canvas.getContext('2d');
//   //plastinas
//   ctx.beginPath();
//   ctx.moveTo(195,110);
//   ctx.lineTo (195, 150);
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.moveTo(195, 90);
//   ctx.lineTo (195, 50);
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.moveTo(210, 90);
//   ctx.lineTo (180, 90);
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.moveTo(210, 110);
//   ctx.lineTo (180, 110);
//   ctx.stroke();
// }

// // TODO: it shouldn't be "other". What is "other"? Is a part of what? Name it, or move it to the component it belongs to.
// function other2() 
// {
//   var canvas = document.getElementById('canvas');
//   var ctx = canvas.getContext('2d');

//   ctx.beginPath();
//   ctx.moveTo(10, 110);
//   ctx.lineTo (10, 150);
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.moveTo(10, 150);
//   ctx.lineTo (15, 150);
//   ctx.stroke();

  
//   ctx.beginPath();
//   ctx.moveTo(10, 110);
//   ctx.lineTo (25, 110);
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.moveTo(25, 85);
//   ctx.lineTo (25, 110);
//   ctx.stroke();
// }

// function laser(aDeflection) 
// {
//   // TODO: aDeflection should be -1..1, it is a float point value. It could be: 0.5, 0.75, -0.11, -0.34 and so on
//   // TODO: if deflection is 0 - the laser is just a straight line
//   // TODO: if deflection is 1 - the laser finishing point should be in the bottom right corner of diagram
//   // TODO: if deflection is -1 - the laser finishing point should be in the top right corner of diagram
  
//   let deflection = (aDeflection == undefined) ? 0 : aDeflection;

//   var canvas = document.getElementById('canvas');
//   var ctx = canvas.getContext('2d');
//   //Laser
  
//   // TODO: change straight path to bezier path
//   ctx.beginPath();
//   ctx.strokeStyle = "#FF2000"
//   ctx.moveTo(20, 100);
//   ctx.lineTo (350, 100);
//   ctx.stroke(); 
// }

// function Descriptions() 
// {
//   var canvas = document.getElementById('canvas');
//   var ctx = canvas.getContext('2d');
//   //Descriptions
//   ctx.beginPath();
//   ctx.strokeStyle = "white"
//   ctx.moveTo(25, 45);
//   ctx.lineTo (25, 85);
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.moveTo(150, 45);
//   ctx.lineTo (150, 75);
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.moveTo(30, 55);
//   ctx.lineTo (145, 55);
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.moveTo(30, 55);
//   ctx.lineTo (35, 52);
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.moveTo(30, 55);
//   ctx.lineTo (35, 58);
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.moveTo(145, 55);
//   ctx.lineTo (140, 58);
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.moveTo(145, 55);
//   ctx.lineTo (140, 52);
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.moveTo(185, 45);
//   ctx.lineTo (205, 45);
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.moveTo(180, 35);
//   ctx.lineTo (180, 90);
//   ctx.stroke();
  
//   ctx.beginPath();
//   ctx.moveTo(210, 35);
//   ctx.lineTo (210, 90);
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.moveTo(185, 45);
//   ctx.lineTo (190, 42);
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.moveTo(185, 45);
//   ctx.lineTo (190, 48);
//   ctx.stroke();
  
//   ctx.beginPath();
//   ctx.moveTo(205, 45);
//   ctx.lineTo (200, 42);
//   ctx.stroke();
  
//   ctx.beginPath();
//   ctx.moveTo(205, 45);
//   ctx.lineTo (200, 48);
//   ctx.stroke();
  
//   ctx.beginPath();
//   ctx.moveTo(180, 190);
//   ctx.lineTo (180, 110);
//   ctx.stroke();
  
//   ctx.beginPath();
//   ctx.moveTo(185, 175);
//   ctx.lineTo (345, 175);
//   ctx.stroke();
  
//   ctx.beginPath();
//   ctx.moveTo(185, 175);
//   ctx.lineTo (190, 170);
//   ctx.stroke();
  
//   ctx.beginPath();
//   ctx.moveTo(185, 175);
//   ctx.lineTo (190, 180);
//   ctx.stroke();
  
//   ctx.beginPath();
//   ctx.moveTo(345, 175);
//   ctx.lineTo (340, 170);
//   ctx.stroke();
  
//   ctx.beginPath();
//   ctx.moveTo(345, 175);
//   ctx.lineTo (340, 180);
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.moveTo(175, 140);
//   ctx.lineTo (155, 140);
//   ctx.stroke();
  
//   ctx.beginPath();
//   ctx.moveTo(160, 145);
//   ctx.lineTo (155, 140);
//   ctx.stroke();
  
//   ctx.beginPath();
//   ctx.moveTo(160, 135);
//   ctx.lineTo (155, 140);
//   ctx.stroke();
  
//   ctx.beginPath();
//   ctx.moveTo(170, 145);
//   ctx.lineTo (175, 140);
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.moveTo(170, 135);
//   ctx.lineTo (175, 140);
//   ctx.stroke();
// }

// function Designations() 
// {
//   var canvas = document.getElementById('canvas');
//   var ctx = canvas.getContext('2d');
//   //Designations
//   ctx.font = "10px Arial";
//   ctx.fillStyle = "Yellow";
//   ctx.fillText("H", 80, 50);

//   ctx.font = "10px Arial";
//   ctx.fillStyle = "Yellow";
//   ctx.fillText("l", 194, 38);
  
//   ctx.font = "10px Arial";
//   ctx.fillStyle = "Yellow";
//   ctx.fillText("Ua", 30, 155);
  
//   ctx.font = "10px Arial";
//   ctx.fillStyle = "Yellow";
//   ctx.fillText("B", 162, 155);

//   ctx.font = "10px Arial";
//   ctx.fillStyle = "Yellow";
//   ctx.fillText("L", 260, 170);
// }

// function drawDiagram()
// {
//   Descriptions();
//   Designations();
//   laser();
//   mainTubePart();
//   plastinas();
//   other();
//   other2(); 
// }

function updateUI()
{
  //TODO: read parameters from inputs

  //TODO: process parameters in model
  

  let graphicParamters = { };

  graphicParamters.canvas = document.getElementById('canvas');
  graphicParamters.laserDeflection = 0;
  
  drawDiagram(graphicParamters);
}

window.addEventListener("load", updateUI);