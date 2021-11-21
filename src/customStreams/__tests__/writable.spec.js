const {CustomWritable} = require('../writable');
const fs = require('fs');
const mockFsAccessSync = jest.spyOn(fs, 'accessSync').mockImplementation(() => {});
const mockEFsOpen = jest.spyOn(fs, 'open').mockImplementation(() => {});
const mockEFsWrite = jest.spyOn(fs, 'write').mockImplementation(() => {});
const mockFsClose = jest.spyOn(fs, 'close').mockImplementation(() => {});

describe("testing class CustomWritable", () => {
  
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should create CustomWritable with filename pass in constructor", () => {
    const customWritable = new CustomWritable('./src/customStreams/__tests__/testoutput.txt');
    expect(customWritable).toBeInstanceOf(CustomWritable);
    expect(customWritable.filename).toBe('./src/customStreams/__tests__/testoutput.txt');
  });
})