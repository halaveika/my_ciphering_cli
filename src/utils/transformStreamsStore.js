const {Rot8Transform} = require('../customStreams/rot8Transform');
const {CaesarCipherTransform} = require('../customStreams/caesarCipherTransform');
const {AtbashTransform} = require('../customStreams/AtbashTransform');

const transformStreamsStore =new Map([
  ['A',{class:AtbashTransform}],
  ['R1',{class:Rot8Transform,type:'1'}],
  ['R0',{class:Rot8Transform,type:'0'}],
  ['C1',{class:CaesarCipherTransform,type:'1'}],
  ['C0',{class:CaesarCipherTransform,type:'0'}]])

  module.exports = {
    transformStreamsStore
  }