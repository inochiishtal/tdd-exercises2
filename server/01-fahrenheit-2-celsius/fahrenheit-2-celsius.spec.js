let fahrenheit2celsius = fahrenheit => (fahrenheit - 32) * 5 / 9;

describe('the fahrenheit-2-celsius canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('fahrenheit-2-celsius functionality tests', () => {
  it ('fahrenheit2celsius of 32 is 0', () => {
    expect(fahrenheit2celsius(32)).toBe(0);
  }); 
  it ('fahrenheit2celsius of 212 is 100', () => {
    expect(fahrenheit2celsius(212)).toBe(100);
  }); 
  it ('fahrenheit2celsius of 50 is 10', () => {
    expect(fahrenheit2celsius(50)).toBe(10);
  });
  it ('fahrenheit2celsius of -40 is -40', () => {
    expect(fahrenheit2celsius(-40)).toBe(-40);
  });
});
