import { Transform } from 'stream';
import {encodeCaesarCipher, decodeCaesarCipher} from '../utils/caesarCipher.js'

export default class CaesarCipherTransform extends Transform {
  constructor(type) {
    super();
    this.type = type;
  }


  _transform(chunk, encoding, callback) {
    try {
      let result;
      if(this.type === '1'){
        console.log(chunk.toString());
        result = encodeCaesarCipher(chunk.toString())
        console.log(result);
      } else {result = decodeCaesarCipher(chunk.toString())}
      callback(null, result);
    } catch (err) {
      callback(err);
    }
  }
}