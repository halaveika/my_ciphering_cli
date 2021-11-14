import Rot8Transform from '../customStreams/rot8Transform.js';
import CaesarCipherTransform from '../customStreams/caesarCipherTransform.js';
import AtbashTransform from '../customStreams/AtbashTransform.js';

const transformStreamsStore =new Map([
  ['A',{class:AtbashTransform}],
  ['R1',{class:Rot8Transform,type:'1'}],
  ['R0',{class:Rot8Transform,type:'0'}],
  ['C1',{class:CaesarCipherTransform,type:'1'}],
  ['C0',{class:CaesarCipherTransform,type:'0'}]])

export default transformStreamsStore;