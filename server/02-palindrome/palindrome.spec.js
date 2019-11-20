let isPalindrome = (text) => {
    if (text == undefined) {
        return false;
    }
    text = text.replace(/\W+/g,'').toLowerCase();
    if (text.length < 1){
        return false;
    }
    let result = text.split("").reverse().join("");
    return result === text;
};

//let isPalindrome = (phrase) => {
//  if (!phrase || phrase.trim().length === 0) return false;
//  return phrase.replace(/\W+/g, '').toLowerCase() === phrase.split('').reverse().join();....
//}

describe('a palindrome function', () => {
    it('shows the infrastructure works', () => {
        expect(true).toBe(true);
      });
    it('radar is a palindrome', () => {
        expect(isPalindrome('radar')).toBe(true);
    });
    it('dog is not a palindrome', () => {
        expect(isPalindrome('dog')).toBe(false);
    });
    it('race car is a palindrome', () => {
        expect(isPalindrome('Race, car')).toBe(true);
    });
    it('mom dad mom is a palindrome', () => {
        expect(isPalindrome('mom dad mom')).toBe(true);
    });
    it('"" is not a palindrome', () => {
        expect(isPalindrome('""')).toBe(false);
    });
    it('"   " is not a palindrome', () => {
        expect(isPalindrome('"   "')).toBe(false);
    });
    it('undefined is not a palindrome', () => {
        expect(isPalindrome()).toBe(false);
    });
    
});
