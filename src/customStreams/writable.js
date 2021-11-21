const { Writable } = require('stream');
const fs = require('fs');
const {InvalidFileError} = require('../customError/baseError');

class CustomWritable extends Writable {
  constructor(filename) {
    super();
    this.filename = filename;
  }

  _construct(callback) {
    try {
      try {
        fs.accessSync(this.filename);
      } catch (e) {
        throw new InvalidFileError('Invalid path to output file or no write access\n');
      }
      fs.open(this.filename, 'a', (err, fd) => {
          this.fd = fd;
          callback();
        });
    } catch (error) {
        process.stderr.write(error.message);
        process.exit(1);
      }
  }

  _write(chunk, encoding, callback) {
    try {
      try {
        fs.write(this.fd, chunk, callback)
      } catch (e) {
        throw new InvalidFileError('Invalid path to output file or no write access\n');
        };
    } catch (error) {
        process.stderr.write(error.message);
        process.exit(1);
      }
  }

  _destroy(err, callback) {
    fs.write(this.fd, '', callback);
    if(this.fd) {
      fs.close(this.fd, error => callback( error || err))
    } else {
      callback(err)
    }
  }

}

module.exports = {
  CustomWritable
}