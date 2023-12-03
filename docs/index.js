

// function laser(aDeflection) 
// {
//   // TODO: aDeflection should be -1..1, it is a float point value. It could be: 0.5, 0.75, -0.11, -0.34 and so on
//   // TODO: if deflection is 0 - the laser is just a straight line
//   // TODO: if deflection is 1 - the laser finishing point should be in the bottom right corner of diagram
//   // TODO: if deflection is -1 - the laser finishing point should be in the top right corner of diagram
  
//   let deflection = (aDeflection == undefined) ? 0 : aDeflection;

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

  graphicParamters.canvas = document.getElementById('canvas');
  graphicParamters.laserDeflection = 0;
  
  drawDiagram(graphicParamters);
}

window.addEventListener("load", updateUI);