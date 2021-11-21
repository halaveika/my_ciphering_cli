const fs = require('fs');
const {BaseError} = require('../customError/baseError');

class Validator{
  static configCheck = (config) =>{
    const resultArr = config.split('-');

    const isFormated = resultArr.every((item => item.length < 3))
    if (!isFormated ) {
      process.stderr.write(`config should be this pattern {XY(-)}n\n`);
      process.exit(1);
    }

    const isValidX = resultArr.every((item => item[0] === 'A' || item[0] === 'R' || item[0] === 'C'))
    if (!isValidX ) {
      process.stderr.write(`first argument X in config pattern {XY(-)}n is not valid A or R or C\n`);
      process.exit(1);
    }

    const isValidLength = resultArr.every(item =>{
      if(item[0] === 'R' || item[0] === 'C') {
        if(item.length === 2) {return true
        } else { return false} 
      }
      return true;
    }
     )
    if (!isValidLength) {
      process.stderr.write(`ROT8 and Caesar cipher should have second argument Y in pattern {XY(-)}n\n`);
      process.exit(1);
    }
    const isValidAtbash = resultArr.every(item =>{
      if(item[0] === 'A') {
        if(item.length === 1) {return true
        } else { return false} 
      }
      return true;
    }
     )
    if (!isValidAtbash ) {
      process.stderr.write(`Atbash cipher should not have second argument Y in pattern {XY(-)}n\n`);
      process.exit(1);
    }
    const isValidY = resultArr.every(item =>{
      if(item.length === 2) {
        if(item[1] === '1' || item[1] === '0' ) {return true
        } else { return false} 
      }
      return true;
    }
     )
    if (!isValidY ) {
      process.stderr.write(`Second argument Y in pattern {XY(-)}n should be only 1 or 0\n`);
      process.exit(1);
    }
  }

  static doubleCheck = (line) => {
    if (line.filter(e => e ==='-i' || e === '--input' ).length > 1) {
      process.stderr.write(`argument -i is doubled!\n`);
      process.exit(1);
    }
    if (line.filter(e => e ==='-o' || e === '--output' ).length > 1) {
      process.stderr.write(`argument -o is doubled!\n`);
      process.exit(1);
    }
    if (line.filter(e => e ==='-c' || e === '--config' ).length > 1) {
      process.stderr.write(`argument -c is doubled!\n`);
      process.exit(1);
    }
  }

}

  module.exports = {
    Validator
  }