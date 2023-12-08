
const numOfLasers = 10;

const e = -1.602e-19;
const ElectronMass = 9.109e-31;

function getRandomInRange(min, max) 
{
    return Math.random() * (max - min) + min;
}

function calculateDeflections(anInitialDeflection, aSpread)
{
    let result = [];

    if(aSpread == 0)
    {
        result.push(anInitialDeflection);
        return result;
    }

    result.push(anInitialDeflection - aSpread);
    result.push(anInitialDeflection + aSpread);

    for (let i=0; i<numOfLasers; i++)
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
    let aDeflection = (inputParameters.Ue * inputParameters.PlatesToMonitor) / (2 * inputParameters.Uy);
    let deflectionCoefficient = aDeflection/inputParameters.Ue
    let deflection = deflectionCoefficient
  
    let result = 
        {
            Ey: (inputParameters.Uy / inputParameters.BetweenThePlates),
            Ay: (e * inputParameters.Uy)/(ElectronMass * inputParameters.BetweenThePlates),
            Vz: Math.sqrt(2 * Math.abs(e) * inputParameters.Uy / ElectronMass),
            // TODO: calculate Vy
            Vy: 0,
            deflection: deflection,
        };
    
    console.log(result);
    return result;
}
