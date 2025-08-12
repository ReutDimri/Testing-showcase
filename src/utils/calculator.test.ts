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
  
  describe('Multiplication', () => {
    test('multiplies two numbers', () => {
      expect(calculator.multiply(3, 4)).toBe(12);
    });
  });
  
  describe('Subtraction', () => {
    test('subtracts two numbers', () => {
      expect(calculator.subtract(10, 3)).toBe(7);
    });
  });
  
  describe('Power', () => {
    test('calculates power', () => {
      expect(calculator.power(2, 3)).toBe(8);
    });
  });
  
  describe('Percentage', () => {
    test('calculates percentage', () => {
      expect(calculator.percentage(100, 25)).toBe(25);
    });
  });
});
