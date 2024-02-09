const numOfLasers = 10;

// const e = -1.602e-19;
const e = -1.6e-19;
// const m = 9.109e-31; // Electron Mass
const m = 9.1e-31; // Electron Mass

const deltaT = 1E-10;

function getRandomInRange(min, max)
{
    return Math.random() * (max - min) + min;
}

function mmToMeters(aNumber)
{
    const result = aNumber / 1000;
    return result;
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

    // -------------------------------------
    const Ey = (Uy / d);
    const Ex = (Ua / H);
    const Ay = (eAbs / m) * Ey;
    const Ax = (eAbs / m) * Ex;
    const Vx = Math.sqrt((Vx0 * Vx0) + (2 * Ax * H));
    const Vy = Math.sqrt(2 * Math.abs(Ay) * l) * Math.sign(Uy);
    // -------------------------------------

    const t = l / Vx;
    const t2 = (L + B + H) / Vx;
    // const t3 = L / Vx;

    const y1 = (Ay * (t * t)) / 2;
    const y2 = Vy * t2;
    const y = y1 + y2;

    const result =
        {
            Vx,
            Vy,
            y: metersToMm(y),
        };

    return result;
}

// module.exports.processParameters = processParameters;
