const {Rot8Transform} = require('../rot8Transform');
const {encodeCaesarCipher, decodeCaesarCipher} = require('../../utils/rot8Cicher');

jest.mock('../../utils/rot8Cicher');

describe("testing class Rot8Transform", () => {


  test("should create Rot8Transform with type 1 in constructor pass 1 ", () => {
    const rot8Transform = new Rot8Transform('1');
    expect(rot8Transform).toBeInstanceOf(Rot8Transform);
    expect(rot8Transform.type).toBe('1');
  });
})