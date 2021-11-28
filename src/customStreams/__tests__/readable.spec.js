const {CustomReadable} = require('../readable');
const fs = require('fs');
const mockFsOpen = jest.spyOn(fs, 'open').mockImplementation(() => {});
const mockEFsRead = jest.spyOn(fs, 'read').mockImplementation(() => {});
const mockFsClose = jest.spyOn(fs, 'close').mockImplementation(() => {});

describe("testing class customReadable", () => {

   test("should create customReadable with filename pass in constructor", () => {
    const customReadable = new CustomReadable('./test.txt');
    expect(customReadable).toBeInstanceOf(CustomReadable);
    expect(customReadable.filename).toBe('./test.txt');
  });
})