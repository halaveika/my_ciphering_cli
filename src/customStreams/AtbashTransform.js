const { Transform } = require('stream');
const {codeAtbash} = require('../utils/atbash');

class AtbashTransform extends Transform {
  constructor() {
    super();
  }

  _transform(chunk, encoding, callback) {
    try {
      const result = codeAtbash(chunk.toString())
      callback(null, result);
    } catch (err) {
      callback(err);
    }
  }
}

module.exports = {
  AtbashTransform
}