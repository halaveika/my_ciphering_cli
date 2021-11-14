import myTransform from '../customStreams/transform.js';
import customReadable from '../customStreams/readable.js';
import customWritable from '../customStreams/writable.js';


export default function creatStreamPipe(object){
  const cliObject = Object.assign({},object);
  let input$ = process.stdin;
  let output$ = process.stdout;
  let transform$;
  console.log(cliObject);
  if (cliObject.input) {
    input$ = new customReadable(cliObject.input);
  }
  if (cliObject.output) {
    output$ = new customWritable(cliObject.output);
  }
  if (cliObject.config) {
    transform$= new myTransform();
  }
  if (transform$) {
    input$.pipe(transform$).on('error').pipe(output$);
  } else {
    input$.pipe(output$);
  }

}

