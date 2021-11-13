export default function commandLineParser(array){
  const result = {};
  const line = array.slice(2);
  for (let i = 0; i<line.length; i++){
    if(line[i] === '-c') {
      result.config = line[i+1]
    }
    if(line[i] === '-i') {
      result.input = line[i+1]
    }
    if(line[i] === '-o') {
      result.output = line[i+1]
    }
  }
  return result
}