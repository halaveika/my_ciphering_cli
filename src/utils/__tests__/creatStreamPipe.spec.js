jest.mock('../../customStreams/readable');
jest.mock('../../customStreams/writable');
jest.mock('../../customError/baseError');
jest.mock('../../utils/configParser')

const {CustomReadable} = require('../../customStreams/readable');
const {CustomWritable} = require('../../customStreams/writable');
const {configParser} = require('../../utils/configParser');
const {BaseError} = require('../../customError/baseError');
const {creatStreamPipe} = require('../creatStreamPipe');

configParser.mockImplementation(() => {
  return []
});

describe("creatStreamPipe from object contain of config, input, outpu values", () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("creat pipeline with customReadable, customwritable and transfroms streams", () => {
    const objectParserd = {
      config: 'C1-R1-C0-C0-A-R0-R1-R1-A-C1',
      input: './input.txt',
      output: './output.txt'
    }
    creatStreamPipe(objectParserd);
    expect(CustomReadable).toHaveBeenCalled();
    expect(CustomWritable).toHaveBeenCalled();
    expect(configParser).toHaveBeenCalled();
  });

  test("creat pipeline with stdin, stdout and transfroms streams", () => {
    const objectParserd = {
      config: 'C1-R1-C0-C0-A-R0-R1-R1-A-C1',
    }
    creatStreamPipe(objectParserd);
    expect(CustomReadable).not.toHaveBeenCalled();
    expect(CustomWritable).not.toHaveBeenCalled();
    expect(configParser).toHaveBeenCalled();
  });
})