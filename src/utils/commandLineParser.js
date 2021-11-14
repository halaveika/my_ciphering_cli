import Validator from "./validator.js";

export default function commandLineParser(array){
  const result = {};
  const line = array.slice(2);
  for (let i = 0; i<line.length; i++){
    if(line[i] === '-c') {
      Validator.configCheck(line[i+1]);
      result.config = line[i+1];
    }
    if(line[i] === '-i') {
      Validator.fileCheck(line[i+1], line[i]);
      result.input = line[i+1];
    }
    if(line[i] === '-o') {
      Validator.fileCheck(line[i+1], line[i]);
      result.output = line[i+1];
    }
  }
  if(!result.config) {
    throw new Error('config is required!');
  }
  return result
}