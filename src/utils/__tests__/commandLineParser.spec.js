const {commandLineParser} = require('../commandLineParser');
const {Validator} = require('../validator');
const { stderr } = require('process');

jest.mock('../validator');
const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
const mockError = jest.spyOn(stderr, 'write').mockImplementation(() => {return 'Config is required!\n'});

describe("configParser should mapping object depand of config parametr", () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  const array = [
    '/home/halaveika/.nvm/versions/node/v16.13.0/bin/node',
    '/home/halaveika/RS/Repositories/my_ciphering_cli/src/index.js',
    '-c',
    'C1-R1-C0-C0-A-R0-R1-R1-A-C1',
    '-i',
    './input.txt',
    '-o',
    './output.txt'
  ]

  test("should get config, output and input files from process.argv", () => {
    const array = [
      '/home/halaveika/.nvm/versions/node/v16.13.0/bin/node',
      '/home/halaveika/RS/Repositories/my_ciphering_cli/src/index.js',
      '-c',
      'C1-R1-C0-C0-A-R0-R1-R1-A-C1',
      '-i',
      './input.txt',
      '-o',
      './output.txt'
    ]

    const result = commandLineParser(array);
    expect(result.config).toBe('C1-R1-C0-C0-A-R0-R1-R1-A-C1');
    expect(result.input).toBe('./input.txt');
    expect(result.output).toBe('./output.txt');
  });

  test("should send error messag if config argument not pass", () => {
    const array = [
      '/home/halaveika/.nvm/versions/node/v16.13.0/bin/node',
      '/home/halaveika/RS/Repositories/my_ciphering_cli/src/index.js',
      '-i',
      './input.txt',
      '-o',
      './output.txt'
    ]
    const result = commandLineParser(array);
    expect(mockError).toHaveBeenCalledWith('Config is required!\n');
    expect(mockExit).toHaveBeenCalled();
  });



})