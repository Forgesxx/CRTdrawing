let view = null;
function collectInputParameters()
{
    const result =
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

function displayCalculatedParameters(calculatedParameters)
{
    document.getElementById("calculatedVx").innerHTML = calculatedParameters.Vx.toFixed(3);
    document.getElementById("calculatedVy").innerHTML = calculatedParameters.Vy.toFixed(3);
    document.getElementById("calculatedAx").innerHTML = calculatedParameters.Ax.toFixed(3);
    document.getElementById("calculatedAy").innerHTML = calculatedParameters.Ay.toFixed(3);
    document.getElementById("calculatedY").innerHTML = calculatedParameters.Y.toFixed(3);
    document.getElementById("calculatedDeltaY").innerHTML = calculatedParameters.DeltaY.toFixed(3);
}

function updateUI()
{
    const inputParameters = collectInputParameters();
    console.log(inputParameters);

    const calculatedParameters = processParameters(inputParameters);

    const graphicParamters = { };

    const spread = inputParameters.SpreadForSpeed / 100;

    graphicParamters.laserDeflection = calculatedParameters.deflection;
    graphicParamters.laserDeflections = calculateDeflections(calculatedParameters.deflection, spread);
    graphicParamters.linePos = inputParameters.LinePos;

    view.drawDiagram(graphicParamters);
    displayCalculatedParameters(calculatedParameters);
}

function onload()
{
    view = new View(document.getElementById('canvas'));
    updateUI();
}

window.addEventListener("load", onload);
