import { Calculator } from './calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('Addition', () => {
    test('adds two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('adds negative numbers', () => {
      expect(calculator.add(-2, -3)).toBe(-5);
    });

    test('adds zero', () => {
      expect(calculator.add(5, 0)).toBe(5);
    });
  });

  describe('Division', () => {
    test('divides two numbers', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test('throws error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Division by zero');
    });

    test('handles decimal results', () => {
      expect(calculator.divide(5, 2)).toBe(2.5);
    });
  });

  describe('Square Root', () => {
    test('calculates square root of positive number', () => {
      expect(calculator.sqrt(9)).toBe(3);
    });

    test('throws error for negative number', () => {
      expect(() => calculator.sqrt(-4)).toThrow('Cannot calculate square root of negative number');
    });
  });
});