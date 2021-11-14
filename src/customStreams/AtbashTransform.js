import { Transform } from 'stream';
import codeAtbash from '../utils/atbash.js'

export default class AtbashTransform extends Transform {
  constructor() {
    super();
  }


  _transform(chunk, encoding, callback) {
    try {
      console.log(chunk.toString());
      const result = codeAtbash(chunk.toString())
      console.log(result);
      callback(null, result);
    } catch (err) {
      callback(err);
    }
  }
}