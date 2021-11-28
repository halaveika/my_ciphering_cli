const {Validator} = require('../validator');
const { stderr } = require('process');

const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {return undefined});
const mockError = jest.spyOn(stderr, 'write').mockImplementation(() => {});

let validator;
describe("testing class validator", () => {

  test("configCheck - send error message and exit if config is not as pattern {XY(-)}", () => {
    const config = 'C1-R1-C0-C0-A-R0-R1R1-A-C1';

    const result = Validator.configCheck(config);

    expect(mockError).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalled();
  });

  test("configCheck - send error message and exit if first argument X in config pattern {XY(-)}n is not valid A or R or C", () => {
    const config = 'B1-R1-C0-C0-A-A-C1';

    const result = Validator.configCheck(config);

    expect(mockError).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalled();
  });

  test("configCheck - send error message and exit if ROT8 and Caesar cipher have not second argument Y in pattern {XY(-)}n", () => {
    const config = 'R-C0-C0-A-A-C1';

    const result = Validator.configCheck(config);

    expect(mockError).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalled();
  });

  test("configCheck - send error message and exit if Atbash cipher have second argument Y in pattern {XY(-)}", () => {
    const config = 'R1-C0-C0-A1-A-C1';

    const result = Validator.configCheck(config);

    expect(mockError).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalled();
  });

  test("configCheck - send error message and exit if Second argument Y in pattern {XY(-)}n not 1 or 0", () => {
    const config = 'R3-C0-C0-A-C1';

    const result = Validator.configCheck(config);

    expect(mockError).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalled();
  });

  test("doubleCheck - send error message and exit if argument -i is doubled", () => {
    const array = [
      '-c',
      'C1-R1-C0-C0-A-R0-R1-R1-A-C1',
      '-i',
      './input.txt',
      '-i',
      './output.txt'
    ]

    const result = Validator.doubleCheck(array);

    expect(mockError).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalled();
  });

  test("doubleCheck - send error message and exit if argument -o is doubled", () => {
    const array = [
      '-c',
      'C1-R1-C0-C0-A-R0-R1-R1-A-C1',
      '-o',
      './input.txt',
      '-o',
      './output.txt'
    ]

    const result = Validator.doubleCheck(array);

    expect(mockError).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalled();
  });

  test("doubleCheck - send error message and exit if argument -c is doubled", () => {
    const array = [
      '-c',
      'C1-R1-C0-C0-A-R0-R1-R1-A-C1',
      '-c',
      'C1',
      '-i',
      './input.txt',
      '-o',
      './output.txt'
    ]

    const result = Validator.doubleCheck(array);

    expect(mockError).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalled();
  });

})