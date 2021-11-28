const {Validator} = require('./validator');

const commandLineParser = (array) => {
  const result = {};
  const line = array.slice(2);
  Validator.doubleCheck(line);
  for (let i = 0; i<line.length; i++){
    if(line[i] === '-c' || line[i] === '--config') {
      Validator.configCheck(line[i+1]);
      result.config = line[i+1];
    }
    if(line[i] === '-i' || line[i] === '--input') {
      result.input = line[i+1];
    }
    if(line[i] === '-o' || line[i] === '--output') {
      result.output = line[i+1];
    }
  }
  if(!result.config) {
    process.stderr.write(`Config is required!\n`);
    process.exit(1);
  }
  return result
}

module.exports = {
  commandLineParser
}