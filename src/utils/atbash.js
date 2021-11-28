const codeAtbash = (str) => {
  const result = str.split('').map(letter => {
    if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90){
      return 155 - letter.charCodeAt(0);
    }
    if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122){
      return 219 - letter.charCodeAt(0);
    }
    return letter.charCodeAt(0);
  });
  return String.fromCharCode(...result);
}


module.exports = {
  codeAtbash
}