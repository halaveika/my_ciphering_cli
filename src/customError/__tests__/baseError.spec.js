const {BaseError,InvalidFileError} = require('../baseError');

describe("testing class BaseError", () => {

  test("should create BaseError", () => {
    const baseError = new BaseError('Error message');
    expect(baseError).toBeInstanceOf(BaseError);
    expect(baseError.message).toBe('Error message');
    expect(baseError.name).toBe('BaseError');
  });
})

describe("testing class InvalidFileError", () => {

  test("should create InvalidFileError", () => {
    const invalidFileError = new InvalidFileError('Error message');
    expect(invalidFileError).toBeInstanceOf(InvalidFileError);
    expect(invalidFileError.message).toBe('Error message');
    expect(invalidFileError.name).toBe('InvalidFileError');
  });
})