// View
const weightInput = document.querySelector('#inputWeight')
const heightInput = document.querySelector('#inputHeight')

const resultContainer = document.querySelector('#resultContainer')
const calcBmiButton = document.querySelector('#calcButton')

// calculo
function calculateBMI() {
    let weight = weightInput.value;
    let height = heightInput.value;
    
    const result = weight / height **2;
    const resultToFloat = Number(result.toFixed(2))
    
    resultContainer.innerHTML = Number.parseInt(resultToFloat);
};

calcBmiButton.addEventListener('click', calculateBMI)


module.exports = calculateBMI;