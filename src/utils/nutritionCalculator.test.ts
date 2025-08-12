import { NutritionCalculator } from './nutritionCalculator';

describe('NutritionCalculator - Real Health Calculations', () => {
  let calculator: NutritionCalculator;

  beforeEach(() => {
    calculator = new NutritionCalculator();
  });

  describe('BMI Calculations', () => {
    test('calculates normal BMI correctly', () => {
      const result = calculator.calculateBMI(70, 1.75);
      expect(result.value).toBe(22.9);
      expect(result.category).toBe('Normal');
    });

    test('identifies underweight correctly', () => {
      const result = calculator.calculateBMI(50, 1.75);
      expect(result.category).toBe('Underweight');
    });
  });

  describe('Daily Calories', () => {
    test('calculates calories for sedentary female', () => {
      const calories = calculator.calculateDailyCalories(
        60, 165, 25, 'female', 1.2
      );
      expect(calories).toBeCloseTo(1560, -1);
    });

    test('calculates calories for active male', () => {
      const calories = calculator.calculateDailyCalories(
        80, 180, 30, 'male', 1.725
      );
      expect(calories).toBeCloseTo(2935, -1);
    });
  });

  describe('Macro Calculations', () => {
    test('calculates macros for cutting', () => {
      const macros = calculator.calculateMacros(2000, 'cut');
      expect(macros.protein).toBeCloseTo(200, -1);
      expect(macros.carbs).toBeCloseTo(150, -1);
      expect(macros.fats).toBeCloseTo(67, -1);
    });
  });
});