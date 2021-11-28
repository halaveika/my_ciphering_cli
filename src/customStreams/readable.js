const { Readable } = require('stream');
const fs = require('fs');
const {InvalidFileError} = require('../customError/baseError');

class CustomReadable extends Readable {
  constructor(filename) {
    super();
    this.filename = filename;
    this.fd = null;
  }

  _construct(callback) {
    fs.open(this.filename,'r', (err, fd) => {
      try {
        if(err) {
          throw new InvalidFileError('Invalid path to input file or no read access\n');
        } else {
          this.fd = fd;
          callback();
        } 
      } catch(e) {
        process.stderr.write(e.message);
        process.exit(1);
      }
    });
  }

  _read(n) {
    const buffer = Buffer.alloc(n)
    fs.read(this.fd, buffer, 0, n, null, (err, bytesRead) => {
      if(err) {
        this.destroy(err);
      } else {
        this.push(bytesRead > 0 ? buffer.slice(0, bytesRead) : null)
      }
    })
  }

  _destroy(err, callback) {
    if(this.fd) {
      fs.close(this.fd, error => callback( error || err))
    } else {
      callback(err)
    }
  }
}

module.exports = {
  CustomReadable
}