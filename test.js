try
{
    const model = require("./docs/model");
    const testData = require("./testData");

    for (let i = 0; i < testData.length; i++)
    {
        const data = testData[i];
        const output = model.processParameters(data.input, data.output);
        console.table(
            {
                expected: data.output,
                obtained: output,
            });
    }
}
catch(error)
{
    console.log(error);
}
