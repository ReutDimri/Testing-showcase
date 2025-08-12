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

  describe('reverse', () => {
    test('reverses a string', () => {
      expect(stringUtils.reverse('hello')).toBe('olleh');
    });
  });
  
  describe('countVowels', () => {
    test('counts vowels in string', () => {
      expect(stringUtils.countVowels('hello world')).toBe(3);
    });
  });
  
  describe('truncate', () => {
    test('truncates long string', () => {
      expect(stringUtils.truncate('This is a long string', 10)).toBe('This i...');
    });
    
    test('does not truncate short string', () => {
      expect(stringUtils.truncate('Short', 10)).toBe('Short');
    });
  });
});