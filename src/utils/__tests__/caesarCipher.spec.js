const {decodeCaesarCipher, encodeCaesarCipher} = require('../caesarCipher');

describe("decodeCaesarCipher fucntion should decode Caesar Cipher", () => {

  test("should decode Uppercase letters charcode > 65", () => {
    const str = 'M';
    const expectedResult = 'L';
    const result = decodeCaesarCipher(str);
    expect(result).toBe(expectedResult);
  });

  test("should decode Uppercase letter charcode = 65", () => {
    const str = 'A';
    const expectedResult = 'Z';
    const result = decodeCaesarCipher(str);
    expect(result).toBe(expectedResult);
  });

  test("should decode Lowwercase letters charcode > 97", () => {
    const str = 'm';
    const expectedResult = 'l';
    const result = decodeCaesarCipher(str);
    expect(result).toBe(expectedResult);
  });

  test("should decode Lowwercase letters charcode = 97", () => {
    const str = 'a';
    const expectedResult = 'z';
    const result = decodeCaesarCipher(str);
    expect(result).toBe(expectedResult);
  });

  test("should change only english letters", () => {
    const str = 'превед';
    const expectedResult = 'превед';
    const result = decodeCaesarCipher(str);
    expect(result).toBe(expectedResult);
  });

})

describe("encodeCaesarCipher fucntion should encode Caesar Cipher", () => {

  test("should encode Uppercase letters charcode < 90", () => {
    const str = 'L';
    const expectedResult = 'M';
    const result = encodeCaesarCipher(str);
    expect(result).toBe(expectedResult);
  });

  test("should encode Uppercase letters charcode = 90", () => {
    const str = 'Z';
    const expectedResult = 'A';
    const result = encodeCaesarCipher(str);
    expect(result).toBe(expectedResult);
  });

  test("should encode Lowwercase letters charcode < 122", () => {
    const str = 'l';
    const expectedResult = 'm';
    const result = encodeCaesarCipher(str);
    expect(result).toBe(expectedResult);
  });

  test("should encode Lowwercase letters charcode = 122", () => {
    const str = 'z';
    const expectedResult = 'a';
    const result = encodeCaesarCipher(str);
    expect(result).toBe(expectedResult);
  });

  test("should change only english letters", () => {
    const str = 'превед';
    const expectedResult = 'превед';
    const result = encodeCaesarCipher(str);
    expect(result).toBe(expectedResult);
  });

})