function TubePart() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    // Main tube part
    ctx.beginPath();
    ctx.moveTo(canvas.width/100*2,canvas.height/100*30);
    ctx.lineTo(a ,canvas.height/100*30);
    ctx.moveTo(canvas.width/100*2, canvas.height/100*70)
    ctx.lineTo(a , canvas.height/100*70)
    ctx.stroke();
  }
  let a = 250;
function drawDiagram(a){
TubePart();
}
  
  window.addEventListener("load", drawDiagram);