const calculateBMI = require('../src/bmi');

test('the BMI of 75kg weight and 1.67m weight will be 26,89', () => {
    expect(calculateBMI(75, 167)).toBe(26.89);
})