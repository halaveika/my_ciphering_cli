import { Readable } from 'stream';
import * as fs from 'fs'

export default class customReadable extends Readable {
  constructor(filename) {
    super();
    this.filename = filename;
    this.fd = null;
  }

  _construct(callback) {
    fs.open(this.filename, (err, fd) => {
      if(err) {
        callback(err);
      } else {
        this.fd = fd;
        callback();
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