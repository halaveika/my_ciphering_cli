const {CaesarCipherTransform} = require('../caesarCipherTransform');
const {encodeToRot8, decodeToRot8} = require('../../utils/caesarCipher');

jest.mock('../../utils/caesarCipher');

describe("testing class CaesarCipherTransform", () => {


  test("should create CaesarCipherTransform with type 1 in constructor pass 1 ", () => {
    const caesarCipherTransform = new CaesarCipherTransform('1');
    expect(caesarCipherTransform).toBeInstanceOf(CaesarCipherTransform);
    expect(caesarCipherTransform.type).toBe('1');
  });
})