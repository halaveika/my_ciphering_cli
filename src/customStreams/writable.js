import { Writable } from 'stream';
import * as fs from 'fs'

export default class customWritable extends Writable {
  constructor(filename) {
    super();
    this.filename = filename;
  }

  _construct(callback) {
    fs.open(this.filename, 'a', (err, fd) => {
      if(err) {
        callback(err);
      } else {
        this.fd = fd;
        callback();
      }
    });

  }

  _write(chunk, encoding, callback) {
    fs.write(this.fd, chunk, callback)
  }

  _destroy(err, callback) {
    if(this.fd) {
      fs.close(this.fd, error => callback( error || err))
    } else {
      callback(err)
    }
  }

  }