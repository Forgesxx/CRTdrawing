
class View
{
  constructor(aCanvas)
  {
    this.canvas = aCanvas;
    this.ctx = this.canvas.getContext('2d');

    // TODO: get rid of this
    this.lineOfTube = 250;
    this.lineOfSecondPartOfTube = this.lineOfTube + 250;
   

  }

  clearCanvas()
  {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  CheckLaser()
  {
   
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
    
    let endPoint = 
      {
        x: this.canvas.width,
        y: halfHeigh + (halfHeigh * aDeflection),
      };
    
    if (endPoint.y < 0)
    {
      endPoint.y = 0;
    }

    if (endPoint.y > this.canvas.height)
    {
      endPoint.y = this.canvas.height;
    }

    this.ctx.strokeStyle = "red";
    this.ctx.beginPath();
    this.ctx.moveTo(startPoint.x, startPoint.y);
//      this.ctx.bezierCurveTo(controlPoint.x, controlPoint.y, controlPoint.x, controlPoint.y, finishingPoint.x, finishingPoint.y);
    this.ctx.lineTo(controlPoint.x, controlPoint.y);
    this.ctx.lineTo(endPoint.x, endPoint.y);

    this.ctx.stroke();
  }

  drawVerticalLine(linePos)
  {
    this.ctx.strokeStyle = "white";
    this.ctx.beginPath();
    this.ctx.moveTo(linePos, 0);
    this.ctx.lineTo(linePos, this.canvas.height);
    this.ctx.stroke();
  }

  drawDiagram(graphicParamters)
  {
    this.clearCanvas();
    this.secondPartOfTube(graphicParamters)
    this.TubePart(graphicParamters);
    this.drawLaser(graphicParamters.laserDeflection);
    this.drawVerticalLine(graphicParamters.linePos);
    for (let i=0; i< graphicParamters.laserDeflections.length; i++)
    {
      this.drawLaser(graphicParamters.laserDeflections[i]);
    }
  }
}

