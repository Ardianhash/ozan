const { capitalize, allCaps, capitalizeWords } = require('../src/index');

describe('String Utilities', () => {
  describe('capitalize', () => {
    test('should capitalize the first letter of a string', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    test('should return the same string if the first letter is already capitalized', () => {
      expect(capitalize('World')).toBe('World');
    });

    test('should return an empty string if an empty string is passed', () => {
      expect(capitalize('')).toBe('');
    });

    test('should return the same value if the value is not a string', () => {
      expect(capitalize(123)).toBe(123);
    });
  });

  describe('allCaps', () => {
    test('should convert all letters in a string to uppercase', () => {
      expect(allCaps('hello world')).toBe('HELLO WORLD');
    });

    test('should return an empty string if an empty string is passed', () => {
      expect(allCaps('')).toBe('');
    });

    test('should return the same value if the value is not a string', () => {
      expect(allCaps(123)).toBe(123);
    });
  });

  describe('capitalizeWords', () => {
    test('should capitalize the first letter of each word in a string', () => {
      expect(capitalizeWords('hello world')).toBe('Hello World');
    });

    test('should return an empty string if an empty string is passed', () => {
      expect(capitalizeWords('')).toBe('');
    });

    test('should return the same value if the value is not a string', () => {
      expect(capitalizeWords(123)).toBe(123);
    });
  });
});
