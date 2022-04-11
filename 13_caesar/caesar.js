const caesar = function(inputMessage, shiftFactor) {
  //Convert to unicode
  let char = new Array(inputMessage.length)
  let outputMessage = new Array(inputMessage.length)
  for (var i = 0; i < inputMessage.length; i++) {
    char[i] = inputMessage.charCodeAt(i);
    char[i] += shiftFactor;
    outputMessage = String.fromCharCode(char[i]);
  }
  return outputMessage;
};

// Do not edit below this line
module.exports = caesar;
