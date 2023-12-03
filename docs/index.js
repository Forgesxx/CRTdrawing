let view = null;

function collectParameters()
{
  let result = 
    {
      Uy:               document.getElementById("Uy").value,
      Ue:               document.getElementById("Ue").value,
      AtoPlate:         document.getElementById("AtoPlate").value,
      PlatesToMonitor:  document.getElementById("PlatesToMonitor").value,
      AnodesToCatodes:  document.getElementById("AnodesToCatodes").value,
      BetweenThePlates: document.getElementById("BetweenThePlates").value,
      PlateLength:      document.getElementById("PlateLength").value,
      SpreadForSpeed:   document.getElementById("SpreadForSpeed").value,
      InitialSpeed:     document.getElementById("InitialSpeed").value,
    };
  return result;
}

function updateUI()
{
  let parameters = collectParameters();
  console.log(parameters);

  //TODO: process parameters in model

  let graphicParamters = { };

  // TODO: AnodesToCatodes is not a laser deflection. Calculate correct laser deflection. this parameter was given just as temporary solution for drawing.
  graphicParamters.laserDeflection = parameters.AnodesToCatodes / 100;
  
  view.drawDiagram(graphicParamters);
}

function onload()
{
  view = new View(document.getElementById('canvas'));
  updateUI();
}

window.addEventListener("load", onload);