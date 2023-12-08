let view = null;
function collectInputParameters()
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
      LinePos:          document.getElementById("LinePos").value,
    };
  return result;
}

function updateUI()
{
  let inputParameters = collectInputParameters();
  console.log(inputParameters);

  let calculatedParameters = processParameters(inputParameters);
  
  // TODO: display calculated parameters

  let graphicParamters = { };

  let spread = inputParameters.SpreadForSpeed / 100;
  
  graphicParamters.laserDeflection = calculatedParameters.deflection;
  graphicParamters.laserDeflections = calculateDeflections(calculatedParameters.deflection, spread);
  
  view.drawDiagram(graphicParamters);
}

function onload()
{
  view = new View(document.getElementById('canvas'));
  updateUI();
}

window.addEventListener("load", onload);