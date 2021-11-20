const {transformStreamsStore} = require('../transformStreamsStore');
describe("transformStreamsStore should creat Map of streams", () => {

  test("transformStreamsStore has keys A,R0,R1,C0,C1", () => {
    const result = transformStreamsStore;
    expect(result.has('A')).toBe(true);
    expect(result.has('R0')).toBe(true);
    expect(result.has('R1')).toBe(true);
    expect(result.has('C0')).toBe(true);
    expect(result.has('C1')).toBe(true);
  });

})