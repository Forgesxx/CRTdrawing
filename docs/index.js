let view = null;
function collectInputParameters()
{
    const result =
    {
        Uy:               document.getElementById("Uy").value,
        Ua:               document.getElementById("Ua").value,
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
    const resultsHTML =
    `
Vx = ${calculatedParameters.Vx.toFixed(3)}<br/>
Vy = ${calculatedParameters.Vy.toFixed(3)}<br/>
ax = ${calculatedParameters.Ax.toFixed(3)}<br/>
ay = ${calculatedParameters.Ay.toFixed(3)}<br/>
y = ${calculatedParameters.Y.toFixed(3)}<br/>
delta y = ${calculatedParameters.DeltaY.toFixed(3)}<br/>
    `;
    document.getElementById("results").innerHTML = resultsHTML;
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
