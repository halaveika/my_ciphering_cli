import * as fs from 'fs';
import transformStreamsStore from './transformStreamsStore.js';

class Validator{
  configCheck = (config) =>{
    if(!config) {
      throw new Error('config is empty');
    }
    const result = config.split('-').every((stream => transformStreamsStore.has(stream)))
    if (!result) {
      throw new Error('invalid config');
    }
  }
  fileCheck = (path,type) => {
    fs.access(path, function (error) {
      if (error) {
        if(type === '-i') {throw new Error(`intput file do not exist in path ${path}`)
        } else {
          throw new Error(`output file do not exist in path ${path}`)
      }
      }
    });
  }
}


export default new Validator();