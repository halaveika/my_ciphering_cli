const { Transform } = require('stream');
const {encodeToRot8, decodeToRot8} = require('../utils/rot8Cicher');

class Rot8Transform extends Transform {
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
      callback(null, result);
    } catch (err) {
      callback(err);
    }
  }
}

module.exports = {
  Rot8Transform
}