try
{
    const model = require("./docs/model");
    const testData = require("./testData");

    for (let i = 0; i < testData.length; i++)
    {
        const data = testData[i];
        const output = model.processParameters(data.input, data.output);
        console.log("expected: " + JSON.stringify(data.output));
        console.log("obtained: " + JSON.stringify(output));
    }
}
catch(error)
{
    console.log(error);
}
