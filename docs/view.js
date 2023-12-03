
class View
{
  constructor(aCanvas)
  {
    this.canvas = aCanvas;
    this.ctx = this.canvas.getContext('2d');

    // TODO: get rid of this
    this.lineOfTube = 250;
    this.lineOfSecondPartOfTube = this.lineOfTube + 250

  }

  clearCanvas()
  {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  TubePart(graphicParamters, ColorStyle) 
  {
    let startPoint = canvas.width/100*2;
    // Main tube part(dynamic)
    this.ctx.beginPath();
    this.ctx.strokeStyle = "lime";
 
    //backPlateOfTube
    this.ctx.moveTo(this.canvas.width/100*2,      this.canvas.height/100*30);
    this.ctx.lineTo(this.canvas.width/100*2,      this.canvas.height/100*70);
    //first part of tube
    this.ctx.moveTo(this.canvas.width/100*2,      this.canvas.height/100*30);
    this.ctx.lineTo(this.lineOfTube,              this.canvas.height/100*30);
    this.ctx.moveTo(this.canvas.width/100*2,      this.canvas.height/100*70)
    this.ctx.lineTo(this.lineOfTube ,             this.canvas.height/100*70)
    //monitor part diagonales
    this.ctx.moveTo(this.lineOfSecondPartOfTube,  this.canvas.height/100*70);
    this.ctx.lineTo(this.canvas.width,            this.canvas.height);
    this.ctx.moveTo(this.lineOfSecondPartOfTube,  this.canvas.height/100*30)
    this.ctx.lineTo(this.canvas.width , 0)
    this.ctx.stroke();
  }

  secondPartOfTube(graphicParamters)
  {
    this.ctx.strokeStyle = "red";
    this.ctx.beginPath();
    this.ctx.moveTo(this.lineOfTube,              this.canvas.height/100*30);
    this.ctx.lineTo(this.lineOfSecondPartOfTube,  this.canvas.height/100*30);
    this.ctx.moveTo(this.lineOfTube,              this.canvas.height/100*70);
    this.ctx.lineTo(this.lineOfSecondPartOfTube,  this.canvas.height/100*70);
    this.ctx.stroke();
  }

  drawLaser(aDeflection)
  {
    let halfHeigh = this.canvas.height / 2;

    let startPoint = { x: 0, y: halfHeigh};

    let controlPoint = 
      {
        x: this.canvas.width / 2,
        y: halfHeigh,
      };
    
    let finishingY = halfHeigh + (halfHeigh * aDeflection);

    let finishingPoint = 
      {
        x: this.canvas.width,
        y: finishingY,
      };
    
      this.ctx.strokeStyle = "red";
      this.ctx.beginPath();
      this.ctx.moveTo(startPoint.x, startPoint.y);
      this.ctx.bezierCurveTo(controlPoint.x, controlPoint.y, controlPoint.x, controlPoint.y, finishingPoint.x, finishingPoint.y);

      this.ctx.stroke();
  }

  // function laser(aDeflection) 
// {
  // TODO: aDeflection should be -1..1, it is a float point value. It could be: 0.5, 0.75, -0.11, -0.34 and so on
  // TODO: if deflection is 0 - the laser is just a straight line
  // TODO: if deflection is 1 - the laser finishing point should be in the bottom right corner of diagram
  // TODO: if deflection is -1 - the laser finishing point should be in the top right corner of diagram
  
//   let deflection = (aDeflection == undefined) ? 0 : aDeflection;

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
// }

  drawDiagram(graphicParamters)
  {
    this.clearCanvas();
    this.secondPartOfTube(graphicParamters)
    this.TubePart(graphicParamters);
    this.drawLaser(graphicParamters.laserDeflection);
  }

}
