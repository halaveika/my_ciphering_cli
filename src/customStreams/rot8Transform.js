import { Transform } from 'stream';
import {encodeToRot8, decodeToRot8} from '../utils/rot8Cicher.js'

export default class Rot8Transform extends Transform {
  constructor(type) {
    super();
    this.type = type;
  }


  _transform(chunk, encoding, callback) {
    try {
      let result;
      if(this.type === '1'){
        result = encodeToRot8(chunk.toString())
      } else {result = decodeToRot8(chunk.toString())}
      console.log(result);
      callback(null, result);
    } catch (err) {
      callback(err);
    }
  }
}