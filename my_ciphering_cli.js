import commandLineParser from './src/utils/commandLineParser.js';
import creatStreamPipe from './src/utils/creatStreamPipe.js';

const cliObject = commandLineParser(process.argv);
creatStreamPipe(cliObject);



