
class BaseError extends Error {
  constructor (message) {
    super(message)

    this.name = this.constructor.name

    Error.captureStackTrace(this, this.constructor);
  }
 }

class InvalidFileError extends Error {
  constructor (message) {
    super(message)

    this.name = this.constructor.name

    Error.captureStackTrace(this, this.constructor);
  }
 }


 module.exports = {
  BaseError, InvalidFileError
}