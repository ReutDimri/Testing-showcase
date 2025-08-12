import { StringUtils } from './stringUtils';

describe('StringUtils', () => {
  let stringUtils: StringUtils;

  beforeEach(() => {
    stringUtils = new StringUtils();
  });

  describe('capitalize', () => {
    test('capitalizes first letter', () => {
      expect(stringUtils.capitalize('hello')).toBe('Hello');
    });

    test('handles empty string', () => {
      expect(stringUtils.capitalize('')).toBe('');
    });

    test('handles single character', () => {
      expect(stringUtils.capitalize('a')).toBe('A');
    });
  });

  describe('isPalindrome', () => {
    test('detects palindrome', () => {
      expect(stringUtils.isPalindrome('racecar')).toBe(true);
    });

    test('detects non-palindrome', () => {
      expect(stringUtils.isPalindrome('hello')).toBe(false);
    });

    test('ignores spaces and punctuation', () => {
      expect(stringUtils.isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    });
  });

  describe('toSlug', () => {
    test('converts to URL-friendly slug', () => {
      expect(stringUtils.toSlug('Hello World!')).toBe('hello-world');
    });

    test('handles special characters', () => {
      expect(stringUtils.toSlug('React & TypeScript @ 2024')).toBe('react-typescript-2024');
    });
  });
});