import myTransform from './src/customStreams/transform.js';
import commandLineParser from './src/utils/commandLineParser.js';

const transform$= new myTransform();
const input$ = process.stdin;
const otput$ = process.stdout;
console.dir(commandLineParser(process.argv));
input$.pipe(transform$).pipe(otput$);
