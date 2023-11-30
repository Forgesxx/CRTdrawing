function TubePart(graphicParamters) 
{
  let canvas = graphicParamters.canvas;
  let ctx = canvas.getContext('2d');

  // Main tube part
  ctx.beginPath();
  
  ctx.moveTo(canvas.width/100*2,canvas.height/100*30);
  ctx.lineTo(250 ,canvas.height/100*30);
  ctx.moveTo(canvas.width/100*2, canvas.height/100*70)
  ctx.lineTo(250 , canvas.height/100*70)
  ctx.stroke();
}

function laser(aDeflection) 
{
  // TODO: aDeflection should be -1..1, it is a float point value. It could be: 0.5, 0.75, -0.11, -0.34 and so on
  // TODO: if deflection is 0 - the laser is just a straight line
  // TODO: if deflection is 1 - the laser finishing point should be in the bottom right corner of diagram
  // TODO: if deflection is -1 - the laser finishing point should be in the top right corner of diagram
  
  let deflection = (aDeflection == undefined) ? 0 : aDeflection;

  let centerPoint {x:0, y:0};
  let halfHeigh = canvas.height / 2;

  if (deflection > 0)
  {
    let pointY = halfHeigh + (deflection * halfHeigh);
  }
  else
  {
    let pointY = halfHeigh - (deflection * halfHeigh);

  }
  
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

  TubePart(graphicParamters);
}

// window.addEventListener("load", drawDiagram);