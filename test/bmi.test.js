const bmi = require('../src/bmi')

test('the BMI of 75kg weight and 1.67m weight will be 26,89', () => {
    expect(bmi(75, 167)).toBe(26.89);
})