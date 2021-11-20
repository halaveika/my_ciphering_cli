const {pipeline} = require('stream');
const {customReadable} = require('../customStreams/readable');
const {customWritable} = require('../customStreams/writable');
const {configParser} = require('../utils/configParser');
const {BaseError} = require('../customError/baseError');
const {transformStreamsStore} = require('./transformStreamsStore');

const creatStreamPipe = (object) => {
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

module.exports = {
  creatStreamPipe
}