import { Transform } from 'stream';

export default class myTransform extends Transform {
  _transform(chunk, encoding, callback) {
    try {
      const result = chunk;
      callback(null, result);
    } catch (err) {
      callback(err);
    }
  }
}