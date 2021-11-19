import commandLineParser from './utils/commandLineParser.js';
import creatStreamPipe from './utils/creatStreamPipe.js';

const cliObject = commandLineParser(process.argv);
creatStreamPipe(cliObject);



