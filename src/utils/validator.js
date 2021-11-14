import * as fs from 'fs';
import transformStreamsStore from './transformStreamsStore.js';

class Validator{
  configCheck = (config) =>{
    if(!config) {
      process.stderr.write(`Config is empty!\n`);
      process.exit(1);
    }
    const result = config.split('-').every((stream => transformStreamsStore.has(stream)))
    if (!result) {
      throw new Error('invalid config');
    }
  }

  fileCheck = (path,type) => {
    fs.access(path, function (error) {
      if (error) {
     
        if(type === '-i' || type === '--input' ) {
          process.stderr.write(`Intput file ${path}  do not exist!\n`);
          process.exit(1);
        } else {
          process.stderr.write(`Otput file ${path} do not exist!\n`);
          process.exit(1);
      }
      }
    });
  }

  doubleCheck = (line) => {
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


export default new Validator();