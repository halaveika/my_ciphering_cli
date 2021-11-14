import Rot8Transform from '../customStreams/rot8Transform.js';
import CaesarCipherTransform from '../customStreams/caesarCipherTransform.js';
import AtbashTransform from '../customStreams/AtbashTransform.js';
import customReadable from '../customStreams/readable.js';
import customWritable from '../customStreams/writable.js';
import configParser from '../utils/configParser.js';
import {pipeline} from 'stream';


export default function creatStreamPipe(object){
  const cliObject = Object.assign({},object);
  let input$;
  let output$;
  let transform$;
  configParser(cliObject.config);
  if (cliObject.input) {
    input$ = new customReadable(cliObject.input);
  } else {
    input$ = process.stdin;
  }
  if (cliObject.config) {
    transform$ = configParser(cliObject.config);
  }
  if (cliObject.output) {
    output$ = new customWritable(cliObject.output);
  } else {
    output$ = process.stdout;
  }
  if(transform$){
    pipeline(
      input$,
      ...transform$,
      output$,
      (err) => {
        if (err) {
          console.error('Pipeline failed.', err);
        } else {
          console.log('Pipeline succeeded.');
        }
      }
      )
  } else {
    pipeline(
      input$,
      output$,
      (err) => {
        if (err) {
          console.error('Pipeline failed.', err);
        } else {
          console.log('Pipeline succeeded.');
        }
      }
      )
  }


}

