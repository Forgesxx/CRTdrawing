const numOfLasers = 10;

const e = -1.602e-19;
const m = 9.109e-31; // Electron Mass

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
    const L = inputParameters.L;
    const Ua = inputParameters.Ua;
    const Uy = inputParameters.Uy;
    const B = inputParameters.B;
    const H = inputParameters.H;
    const d = inputParameters.d;
    const l = inputParameters.l;
    const Vx = inputParameters.Vx;
    let aDeflection = (Ua * L) / (2 * Uy);

    // TODO: use values in pixels instead of values in milimeters.

    aDeflection = aDeflection / Ua;

    const h = (Uy * L * e) / (2 * d * Ua);

    // -------------------------------------
    const Ey = (Uy / d);
    const Ay = (e * Uy) / (m * d);
    const Vz = Math.sqrt(2 * Math.abs(e) * Uy / m);
    const Vy = (e * Uy * l) / (m * Vz * d);
    // -------------------------------------

    const result =
        {
            Vx,
            Vy,
            // TODO: calculate Ax
            Ax: 0,
            Ay,
            // TODO: calculate Y
            Y: h,
            // TODO: calculate deltaY
            DeltaY: 0,
            // ------
            Ey,
            Vz,
            deflection: aDeflection,
            // TODO: DeltaTime
            DeltaTime: 0,
        };

    console.log(result);
    return result;
}
