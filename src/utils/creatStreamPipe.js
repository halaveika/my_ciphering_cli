import customReadable from '../customStreams/readable.js';
import customWritable from '../customStreams/writable.js';
import configParser from '../utils/configParser.js';
import {pipeline} from 'stream';
import BaseError from '../customError/baseError.js';
import transformStreamsStore from './transformStreamsStore.js';


export default function creatStreamPipe(object){
  const cliObject = Object.assign({},object);
  let input$;
  let output$;
  let transform$;
  if (cliObject.input) {
    input$ = new customReadable(cliObject.input);
  } else {
    input$ = process.stdin;
  }
  if (cliObject.config) {
    transform$ = configParser(cliObject.config,transformStreamsStore);
  }
  if (cliObject.output) {
    output$ = new customWritable(cliObject.output);
  } else {
    output$ = process.stdout;
  }

  pipeline(
    input$,
    ...transform$,
    output$,
    (err) => {
      if (err) {
        throw new BaseError('Pipeline failed');
      }
    }
  ) 


}

