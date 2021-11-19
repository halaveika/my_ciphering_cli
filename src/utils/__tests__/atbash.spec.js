import codeAtbash from '../atbash.js';

describe("codeAtbash fucntion should cipher as Atbash method", () => {

  test("should cipher Uppercase letters", () => {
    const str = 'A';
    const expectedResult = 'Z';
    const result = codeAtbash(str);
    expect(result).toBe(expectedResult);
  });

  test("should cipher Lowwercase letters", () => {
    const str = 'z';
    const expectedResult = 'a';
    const result = codeAtbash(str);
    expect(result).toBe(expectedResult);
  });

  test("should change only english letters", () => {
    const str = 'превед';
    const expectedResult = 'превед';
    const result = codeAtbash(str);
    expect(result).toBe(expectedResult);
  });

})