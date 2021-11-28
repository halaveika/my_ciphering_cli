const {pipeline} = require('stream');
const {CustomReadable} = require('../customStreams/readable');
const {CustomWritable} = require('../customStreams/writable');
const {configParser} = require('../utils/configParser');
const {BaseError} = require('../customError/baseError');
const {transformStreamsStore} = require('./transformStreamsStore');

const creatStreamPipe = (object) => {
  const cliObject = Object.assign({},object);
  let input$;
  let output$;
  let transform$;
  if (cliObject.input) {
    input$ = new CustomReadable(cliObject.input);
  } else {
    input$ = process.stdin;
  }
  if (cliObject.output) {
    output$ = new CustomWritable(cliObject.output);
  } else {
    output$ = process.stdout;
  }
  transform$ = configParser(cliObject.config,transformStreamsStore);
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

module.exports = {
  creatStreamPipe
}