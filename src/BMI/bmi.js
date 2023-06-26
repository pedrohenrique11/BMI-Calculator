// View
const weightInput = document.querySelector('#inputWeight')
const heightInput = document.querySelector('#inputHeight')

const form = document.querySelector('form')

const resultContainer = document.querySelector('#resultContainer')

form.onsubmit = e => {
    e.preventDefault();

    let weight = weightInput.value;
    let height = heightInput.value;

    const result = calculateBMI(weight, height)

    resultContainer.innerHTML = Number(result);
}

function calculateBMI(weight, height) {
    return (weight / (height/ 100)**2).toFixed(2);
};


module.exports = calculateBMI;