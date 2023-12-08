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
      LinePos:          document.getElementById("LinePos").value,
    };
  return result;
}


function updateUI()
{
  const e = -1.602e-19;
  const ElectronMass = 9.109e-31;

  let parameters = collectParameters();
  console.log(parameters);
  //calculate Ey.
  let Ey =  (parameters.Uy / parameters.BetweenThePlates);
  console.log("Ey:", Ey)
  //calculate ay
  
  let Ay = (e * parameters.Uy)/(ElectronMass * parameters.BetweenThePlates);
  console.log("Ay:", Ay)

  //calculate Vz
  let Vz = Math.sqrt(2 * Math.abs(e) * parameters.Uy / ElectronMass)
  console.log("Vz:", Vz)

  //calculate Vy
  let Vy = (e*parameters.Uy*parameters.PlateLength)/(ElectronMass*Vz*parameters.BetweenThePlates);
  console.log("Vy:",Vy)
  
  //calculate DeltaTime
  // let DeltaTime =э

  //TODO: process parameters in model

  let graphicParamters = { };

  // TODO: AnodesToCatodes is not a laser deflection. Calculate correct laser deflection. this parameter was given just as temporary solution for drawing.
  let aDeflection = (parameters.Ue * parameters.PlatesToMonitor) / (2 * parameters.Uy);
  let deflectionCoefficient = aDeflection/parameters.Ue
  let deflection = deflectionCoefficient
  console.log(aDeflection)
  console.log(deflectionCoefficient)
  let spread = parameters.SpreadForSpeed / 100;
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