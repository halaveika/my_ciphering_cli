const {AtbashTransform} = require('../AtbashTransform');
const {codeAtbash} = require('../../utils/atbash');

jest.mock('../../utils/atbash')



describe("testing class AtbashTransform", () => {


  test("should create AtbashTransform by new operator", () => {
    const atbashTransform = new AtbashTransform();
    expect(atbashTransform).toBeInstanceOf(AtbashTransform);
  });
})