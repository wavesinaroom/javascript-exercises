const reverseString = function(inputString) {
  let outputString= new Array(inputString.length);
  for(let i = 0; i <= inputString.length; i++)
  {
    outputString[i] = inputString[inputString.length-i];
  }
  return outputString.join("");
};

reverseString("hello");
reverseString("hello there");
reverseString("!123 abc!");
reverseString("");  

// Do not edit below this line
module.exports = reverseString;
