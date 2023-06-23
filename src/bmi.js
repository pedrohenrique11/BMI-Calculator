
function calculateBMI (weight, height) {
    const resultMBI = weight / height **2;

    console.log(`Your MBI is ${resultMBI}`)
};

calculateBMI(75, 167);

module.exports = calculateBMI;