let view = null;
function collectInputParameters()
{
    const result =
    {
        Uy:               Number(document.getElementById("Uy").value),
        Ua:               Number(document.getElementById("Ua").value),
        B:                Number(document.getElementById("B").value),
        L:                Number(document.getElementById("L").value),
        H:                Number(document.getElementById("H").value),
        d:                Number(document.getElementById("d").value),
        l:                Number(document.getElementById("l").value),
        SpreadForSpeed:   Number(document.getElementById("SpreadForSpeed").value),
        Vx:               Number(document.getElementById("Vx").value),
        Cuantity:         Number(document.getElementById("cuantity").value),
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

    view.drawDiagram(graphicParamters);
    displayCalculatedParameters(calculatedParameters);
}

function onload()
{
    view = new View(document.getElementById('canvas'));
    updateUI();
}

window.addEventListener("load", onload);
