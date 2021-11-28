const {encodeToRot8, decodeToRot8} = require('../rot8Cicher');

describe("rot8Cicher fucntion should decode rot8 Cipher", () => {

  test("should decode Uppercase letters charcode < 73", () => {
    const str = 'B';
    const expectedResult = 'T';
    const result = decodeToRot8(str);
    expect(result).toBe(expectedResult);
  });

  test("should decode Uppercase letter charcode >= 73", () => {
    const str = 'Z';
    const expectedResult = 'R';
    const result = decodeToRot8(str);
    expect(result).toBe(expectedResult);
  });

  test("should decode Lowwercase letters charcode < 105", () => {
    const str = 'b';
    const expectedResult = 't';
    const result = decodeToRot8(str);
    expect(result).toBe(expectedResult);
  });

  test("should decode Lowwercase letters charcode >= 105", () => {
    const str = 'z';
    const expectedResult = 'r';
    const result = decodeToRot8(str);
    expect(result).toBe(expectedResult);
  });

  test("should change only english letters", () => {
    const str = 'превед';
    const expectedResult = 'превед';
    const result = decodeToRot8(str);
    expect(result).toBe(expectedResult);
  });

})

describe("rot8Cicher fucntion should encode rot8 Cipher", () => {

  test("should encode Uppercase letters charcode < 82", () => {
    const str = 'C';
    const expectedResult = 'K';
    const result = encodeToRot8(str);
    expect(result).toBe(expectedResult);
  });

  test("should encode Uppercase letters charcode >= 82", () => {
    const str = 'S';
    const expectedResult = 'A';
    const result = encodeToRot8(str);
    expect(result).toBe(expectedResult);
  });

  test("should encode Lowwercase letters charcode < 114", () => {
    const str = 'd';
    const expectedResult = 'l';
    const result = encodeToRot8(str);
    expect(result).toBe(expectedResult);
  });

  test("should encode Lowwercase letters charcode >= 114", () => {
    const str = 'w';
    const expectedResult = 'e';
    const result = encodeToRot8(str);
    expect(result).toBe(expectedResult);
  });

  test("should change only english letters", () => {
    const str = 'превед';
    const expectedResult = 'превед';
    const result = encodeToRot8(str);
    expect(result).toBe(expectedResult);
  });

})
