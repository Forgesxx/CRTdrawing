const numOfLasers = 10;

const e = -1.602e-19;
const m = 9.109e-31; // Electron Mass

function getRandomInRange(min, max)
{
    return Math.random() * (max - min) + min;
}

function mmToMeters(aNumber)
{
    return aNumber / 1000;
}

function metersToMm(aNumber)
{
    return aNumber * 1000;
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

function processParameters(inputParameters, expectedOutput)
{
    const L = mmToMeters(inputParameters.L);
    const Ua = inputParameters.Ua;
    const Uy = inputParameters.Uy;
    const B = mmToMeters(inputParameters.B);
    const H = mmToMeters(inputParameters.H); // from annode to cathode
    const d = mmToMeters(inputParameters.d); // distance between plates
    const l = mmToMeters(inputParameters.l); // plates Length
    const Vx0 = inputParameters.Vx;
    const eAbs = Math.abs(e);

    const UaPercent = Ua / 100;

    const Vx = Math.sqrt(2 * eAbs * Ua / m);
    // const Vx2 = Math.sqrt(2 * eAbs * (Ua + (UaPercent * 7.1)) / m);

    // -------------------------------------
    const Ey = (Uy / d);
    const Ex = (Ua / H);
    const Ay = (e / m) * Ey;
    const Ax = (e / m) * Ex;

    // -------------------------------------

    const h = (Uy * L * Ey) / (2 * d * Ua);

    const h2 = (eAbs / m) * Ey * (l / (Vx0 * Vx0)) * ((l / 2) + L);

    const h3 = ((L + (l / 2)) * Ey * l) / (2 * d * Ex);

    const Vy = (e / m) * Ey * (l / Vx0);

    const result =
        {
            Vx,
            Vy,
            y: metersToMm(h),
            y2: metersToMm(h2),
            y3: metersToMm(h3),
        };

    return result;
}

module.exports.processParameters = processParameters;
