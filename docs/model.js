const numOfLasers = 10;

const e = -1.602e-19;
const ElectronMass = 9.109e-31;

function getRandomInRange(min, max)
{
    return Math.random() * (max - min) + min;
}

function calculateDeflections(anInitialDeflection, aSpread)
{
    const result = [];

    if (aSpread === 0)
    {
        result.push(anInitialDeflection);
        return result;
    }

    result.push(anInitialDeflection - aSpread);
    result.push(anInitialDeflection + aSpread);

    for (let i = 0; i < numOfLasers; i++)
    {
        result.push(
            getRandomInRange(
                anInitialDeflection - aSpread,
                anInitialDeflection + aSpread));
    }

    return result;
}

function processParameters(inputParameters)
{
    // TODO: how to calculate deflection???
    let aDeflection = (inputParameters.Ue * inputParameters.PlatesToMonitor) / (2 * inputParameters.Uy);

    // TODO: use values in pixels instead of values in milimeters.

    aDeflection = aDeflection / inputParameters.Ue;

    const aVz = Math.sqrt(2 * Math.abs(e) * inputParameters.Uy / ElectronMass);

    const result =
        {
        // parameters that will be displayed
            // TODO: calculate Vx
            Vx: 0,
            Vy: (e * inputParameters.Uy * inputParameters.PlateLength) / (ElectronMass * aVz * inputParameters.BetweenThePlates),
            // TODO: calculate Ax
            Ax: 0,
            Ay: (e * inputParameters.Uy) / (ElectronMass * inputParameters.BetweenThePlates),
            // TODO: calculate Y
            Y: 0,
            // TODO: calculate deltaY
            DeltaY: 0,
            // ------
            Ey: (inputParameters.Uy / inputParameters.BetweenThePlates),
            Vz: aVz,
            deflection: aDeflection,
            // TODO: DeltaTime
            DeltaTime: 0,
        };

    console.log(result);
    return result;
}
