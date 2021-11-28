const {commandLineParser} = require('./utils/commandLineParser');
const {creatStreamPipe} = require('./utils/creatStreamPipe');

const cliObject = commandLineParser(process.argv);
creatStreamPipe(cliObject);



