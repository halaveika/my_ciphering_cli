export function encodeToRot8(str) {
  const result = str.split('').map(letter => {
    if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <=90){
      const enqrypt = letter.charCodeAt(0) + 8;
      return (enqrypt > 90) ? (enqrypt -26) : enqrypt;}
    if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <=122){
      const enqrypt = letter.charCodeAt(0) + 8;
      return (enqrypt > 122) ? (enqrypt -26) : enqrypt;}
    return letter.charCodeAt(0);
  });
  return String.fromCharCode(...result);
}

export function decodeToRot8(str) {
  const result = str.split('').map(letter => {
    if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <=90){
      const enqrypt = letter.charCodeAt(0) - 8;
      return (enqrypt < 65) ? (enqrypt + 26) : enqrypt;}
    if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <=122){
      const enqrypt = letter.charCodeAt(0) - 8;
      return (enqrypt < 97) ? (enqrypt + 26) : enqrypt;}
    return letter.charCodeAt(0);
  });
  return String.fromCharCode(...result);
}