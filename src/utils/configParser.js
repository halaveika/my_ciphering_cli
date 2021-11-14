import Rot8Transform from '../customStreams/rot8Transform.js';
import CaesarCipherTransform from '../customStreams/caesarCipherTransform.js';
import AtbashTransform from '../customStreams/AtbashTransform.js';
const transformStreamsStore =new Map([
  ['A',new AtbashTransform()],
  ['R1',new Rot8Transform('1')],
  ['R0',new Rot8Transform('0')],
  ['C1',new CaesarCipherTransform('1')],
  ['C0',new CaesarCipherTransform('0')]])

export default function configParser(config) {
  return config.split('-').map(stream => transformStreamsStore.get(stream));
}