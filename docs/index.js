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
  const e = -1.602e-19;
  const ElectronMass = 9.109e-31;

  let inputParameters = collectInputParameters();
  console.log(inputParameters);
  //calculate Ey.
  let Ey =  (inputParameters.Uy / inputParameters.BetweenThePlates);
  console.log("Ey:", Ey)
  //calculate ay
  
  let Ay = (e * inputParameters.Uy)/(ElectronMass * inputParameters.BetweenThePlates);
  console.log("Ay:", Ay)

  //calculate Vz
  let Vz = Math.sqrt(2 * Math.abs(e) * inputParameters.Uy / ElectronMass)
  console.log("Vz:", Vz)

  //calculate Vy
  let Vy = 0;
  

  //TODO: process parameters in model

  let graphicParamters = { };

  // TODO: AnodesToCatodes is not a laser deflection. Calculate correct laser deflection. this parameter was given just as temporary solution for drawing.
  let aDeflection = (inputParameters.Ue * inputParameters.PlatesToMonitor) / (2 * inputParameters.Uy);
  let deflectionCoefficient = aDeflection/inputParameters.Ue
  let deflection = deflectionCoefficient
  console.log(aDeflection)
  console.log(deflectionCoefficient)
  let spread = inputParameters.SpreadForSpeed / 100;
  graphicParamters.laserDeflection = deflection;
  graphicParamters.laserDeflections = calculateDeflections(deflection, spread);
  
  view.drawDiagram(graphicParamters);
}

function onload()
{
  view = new View(document.getElementById('canvas'));
  updateUI();
}

window.addEventListener("load", onload);