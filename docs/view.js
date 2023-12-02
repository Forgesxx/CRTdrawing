function TubePart(graphicParamters, ColorStyle) 
{
  let canvas = graphicParamters.canvas;
  let ctx = canvas.getContext('2d');

  // Main tube part(dynamic)
  ctx.beginPath();
  ctx.strokeStyle = "lime";
 
  //backPlateOfTube
  ctx.moveTo(canvas.width/100*2,canvas.height/100*30);
  ctx.lineTo(canvas.width/100*2 ,canvas.height/100*70);
  //first part of tube
  ctx.moveTo(canvas.width/100*2,canvas.height/100*30);
  ctx.lineTo(lineOfTube ,canvas.height/100*30);
  ctx.moveTo(canvas.width/100*2, canvas.height/100*70)
  ctx.lineTo(lineOfTube , canvas.height/100*70)
  //monitor part diagonales
  ctx.moveTo(lineOfSecondPartOfTube,canvas.height/100*70);
  ctx.lineTo(canvas.width ,canvas.height);
  ctx.moveTo(lineOfSecondPartOfTube, canvas.height/100*30)
  ctx.lineTo(canvas.width , 0)
  ctx.stroke();
}
function secondPartOfTube(graphicParamters)
{
  let canvas = graphicParamters.canvas;
  let ctx = canvas.getContext('2d');
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(lineOfTube,canvas.height/100*30);
  ctx.lineTo(lineOfSecondPartOfTube ,canvas.height/100*30);
  ctx.moveTo(lineOfTube, canvas.height/100*70);
  ctx.lineTo(lineOfSecondPartOfTube , canvas.height/100*70);
  ctx.stroke();
}

let lineOfTube = 250;
let lineOfSecondPartOfTube = lineOfTube + 250
let startPoint = canvas.width/100*2;
function laser(aDeflection) 
{
  // TODO: aDeflection should be -1..1, it is a float point value. It could be: 0.5, 0.75, -0.11, -0.34 and so on
  // TODO: if deflection is 0 - the laser is just a straight line
  // TODO: if deflection is 1 - the laser finishing point should be in the bottom right corner of diagram
  // TODO: if deflection is -1 - the laser finishing point should be in the top right corner of diagram
  
  let deflection = (aDeflection == undefined) ? 0 : aDeflection;

  // let centerPoint {x:0, y:0};
  // let halfHeigh = canvas.height / 2;

  // if (deflection > 0)
  // {
  //   let pointY = halfHeigh + (deflection * halfHeigh);
  // }
  // else
  // {
  //   let pointY = halfHeigh - (deflection * halfHeigh);

  // }
  
  // var canvas = document.getElementById('canvas');
  // var ctx = canvas.getContext('2d');
  // //Laser
  
  // // TODO: change straight path to bezier path
  // ctx.beginPath();
  // ctx.strokeStyle = "#FF2000"
  // ctx.moveTo(20, 100);
  // ctx.lineTo (350, 100);
  // ctx.stroke(); 
}

function drawDiagram(graphicParamters)
{
  secondPartOfTube(graphicParamters)
  TubePart(graphicParamters);
}

// window.addEventListener("load", drawDiagram);