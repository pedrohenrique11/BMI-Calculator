// View
const weightInput = document.querySelector('#inputWeight')
const heightInput = document.querySelector('#inputHeight')
const errorAlert = document.querySelector('#errorAlert')

const form = document.querySelector('form')
const sectionResult = {
    section: document.querySelector('#resultModal'),
    result: document.querySelector('#result'),
    description: document.querySelector('#description'),
    open() {
        sectionResult.section.classList.remove('hide')
    },
    close() {
        sectionResult.section.classList.add('hide')
    }
}
const showError = {
    alert: document.querySelector('#errorAlert'),
    open() {
        errorAlert.classList.remove('hide')
    },
    close() {
        errorAlert.classList.add('hide')
    },
}

form.onsubmit = e => {
    e.preventDefault();

    const weight = weightInput.value;
    const height = heightInput.value;

    const result = calculateBMI(weight, height)
    const description = setDescription(result)

    if (weight === '' || height === '') {
        return showError.open()
    }

    sectionResult.result.innerHTML = `Your BMI is ${result}`;
    sectionResult.description.innerHTML = description;
    sectionResult.open()
}

weightInput.oninput = () => showError.close();
heightInput.oninput = () => showError.close();

function calculateBMI(weight, height) {
    return (weight / (height/ 100)**2).toFixed(2);
};
function setDescription(BMI) {
    if( BMI <= 18.5 ) {
        return 'You are underweight!'
    }
    else if( BMI <= 24.9 ) {
        return 'You are in healthy weight!'
    }
    else if( BMI <= 29.9 ) {
        return 'You are overweight!'
    }
    else if( BMI > 30 && BMI < 39.9 ) {
        return 'You are in obesity! Please, be careful with your health :)'
    }
    else return 'You are in class 3 obesity! Please, be careful with your health :)'
}

module.exports = calculateBMI;