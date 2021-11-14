import Rot8Transform from '../customStreams/rot8Transform.js';
import CaesarCipherTransform from '../customStreams/caesarCipherTransform.js';
import AtbashTransform from '../customStreams/AtbashTransform.js';
import customReadable from '../customStreams/readable.js';
import customWritable from '../customStreams/writable.js';
import configParser from '../utils/configParser.js';


export default function creatStreamPipe(object){
  const cliObject = Object.assign({},object);
  let resultPipe;
  let input$;
  let output$;
  configParser(cliObject.config);
  if (cliObject.input) {
    input$ = new customReadable(cliObject.input);
  } else {
    input$ = process.stdin;
  }
  resultPipe = input$;
  if (cliObject.config) {
    configParser(cliObject.config).forEach(
      transformStream => resultPipe.pipe(transformStream)
    );
  }
  if (cliObject.output) {
    output$ = new customWritable(cliObject.output);
  } else {
    output$ = process.stdout;
  }
  resultPipe.pipe(output$);
}

