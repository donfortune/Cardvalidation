import { valid } from './luhn';

describe('Luhn Algorithm Validator', () => {
  
  it('should return true for a valid credit card number without spaces', () => {
    expect(valid('4242424242424242')).toBe(true);
  });

  it('should return true for a valid card with spaces', () => {
    // Standard spacing found on physical cards
    expect(valid('4242 4242 4242 4242')).toBe(true);
  });

  it('should return false if the user includes dashes', () => {
    // Enforcing strict validation based on physical card formatting
    expect(valid('4242-4242-4242-4242')).toBe(false);
  });

  it('should return false for a card number that fails the math check', () => {
    // Typo in the last digit
    expect(valid('4242424242424243')).toBe(false);
  });

  it('should return false if the input contains invalid characters', () => {
    // Letters should be rejected by the regex
    expect(valid('4242 4242 ABCD 4242')).toBe(false);
  });

  it('should return false for empty or extremely short inputs', () => {
    expect(valid('')).toBe(false);
    expect(valid('4')).toBe(false);
  });

});