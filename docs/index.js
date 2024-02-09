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
y = ${calculatedParameters.y.toFixed(3)}<br/>
    `;
    document.getElementById("results").innerHTML = resultsHTML;
}

function convertMMToPixels(L, y)
{
    const halfWidth = view.halfWidth;
    const result = (y * halfWidth) / L;
    return result;
}

function updateUI()
{
    const inputParameters = collectInputParameters();

    const calculatedParameters = processParameters(inputParameters);

    const graphicParamters = { };

    const spread = inputParameters.SpreadForSpeed / 100;

    graphicParamters.laserDeflection = convertMMToPixels(inputParameters.L, calculatedParameters.y);
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
