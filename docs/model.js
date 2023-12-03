
const numOfLasers = 10;

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

    for (let i=0; i<numOfLasers; i++)
    {
        result.push(
            getRandomInRange(
                anInitialDeflection - aSpread,
                anInitialDeflection + aSpread));
    }

    return result;
}