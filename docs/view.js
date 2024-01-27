class View
{
    static plateSize = 100;
    static plateDistance = 60;

    constructor(aCanvas)
    {
        this.canvas = aCanvas;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.lineWidth = 2;
        this.tubeTop = this.canvas.height / 100 * 30;
        this.tubeBottom = this.canvas.height / 100 * 70;
        this.canvasLeft = this.canvas.width / 100 * 2;
        this.canvasRight = this.canvas.width - (this.canvas.width / 100 * 2);
        this.canvasTop = this.canvas.height / 100 * 2;
        this.canvasBottom = this.canvas.height - (this.canvas.height / 100 * 2);
        this.halfWidth = this.canvas.width / 2;
    }

    clearCanvas()
    {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawTube()
    {
        this.ctx.beginPath();
        this.ctx.strokeStyle = "lime";

        // back plate of tube
        this.ctx.moveTo(this.canvasLeft,      this.tubeTop);
        this.ctx.lineTo(this.canvasLeft,      this.tubeBottom);

        // first part of tube
        this.ctx.moveTo(this.canvasLeft,      this.tubeTop);
        this.ctx.lineTo(this.halfWidth,     this.tubeTop);
        this.ctx.moveTo(this.canvasLeft,      this.tubeBottom);
        this.ctx.lineTo(this.halfWidth,     this.tubeBottom);
        // monitor part diagonales
        this.ctx.moveTo(this.halfWidth,     this.tubeBottom);
        this.ctx.lineTo(this.canvasRight,  this.canvasBottom);
        this.ctx.moveTo(this.halfWidth,     this.tubeTop);
        this.ctx.lineTo(this.canvasRight, this.canvasTop);

        this.ctx.moveTo(this.canvasRight, this.canvasTop);
        this.ctx.lineTo(this.canvasRight, this.canvasBottom);
        this.ctx.stroke();
    }

    drawPlates()
    {
        this.ctx.beginPath();
        this.ctx.strokeStyle = "lime";

        this.ctx.moveTo(this.halfWidth - (View.plateSize / 2),  this.tubeTop);
        this.ctx.lineTo(this.halfWidth - (View.plateSize / 2),  this.tubeTop + View.plateDistance);

        this.ctx.moveTo(this.halfWidth - View.plateSize,        this.tubeTop + View.plateDistance);
        this.ctx.lineTo(this.halfWidth,                    this.tubeTop + View.plateDistance);

        this.ctx.moveTo(this.halfWidth - (View.plateSize / 2),  this.tubeBottom);
        this.ctx.lineTo(this.halfWidth - (View.plateSize / 2),  this.tubeBottom - View.plateDistance);

        this.ctx.moveTo(this.halfWidth - View.plateSize,        this.tubeBottom - View.plateDistance);
        this.ctx.lineTo(this.halfWidth,                    this.tubeBottom - View.plateDistance);

        this.ctx.stroke();
    }

    drawLaser(aDeflection)
    {
        const halfHeigh = this.canvas.height / 2;

        const startPoint = { x: 0, y: halfHeigh, };

        const controlPoint =
        {
            x: (this.canvas.width / 2) - (View.plateSize / 2),
            y: halfHeigh,
        };

        const endPoint =
        {
            x: this.canvas.width,
            // y: halfHeigh + (halfHeigh * aDeflection),
            y: halfHeigh - (aDeflection),
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
        // this.ctx.bezierCurveTo(controlPoint.x, controlPoint.y, controlPoint.x, controlPoint.y, finishingPoint.x, finishingPoint.y);
        this.ctx.lineTo(controlPoint.x, controlPoint.y);
        this.ctx.lineTo(endPoint.x, endPoint.y);

        this.ctx.stroke();
    }

    drawDiagram(graphicParamters)
    {
        this.clearCanvas();
        this.drawTube();
        this.drawPlates();
        this.drawLaser(graphicParamters.laserDeflection);
        for (let i = 0; i < graphicParamters.laserDeflections.length; i++)
        {
            this.drawLaser(graphicParamters.laserDeflections[i]);
        }
    }
}
