const caesar = function(inputMessage, shiftFactor) {

  let char = new Array(inputMessage.length);
  let outputMessage = new Array(inputMessage.length);

  let regEx = /^[a-zA-Z0-9]+$/;

  const capLetterTopBound = 65; // A
  const capLetterBottomBound = 90; // Z

  const nonCapLetterTopBound = 97;  // a
  const nonCapLetterBottomBound = 122; // z

  let remainder = shiftFactor;

  for (var i = 0; i < inputMessage.length; i++) {
      if(inputMessage[i].match(regEx))
      {
        char[i] = inputMessage.charCodeAt(i);

        if((char[i]<capLetterBottomBound)&&(char[i]>capLetterTopBound)&&(char[i]+shiftFactor)>capLetterBottomBound)
        {
          remainder -= (capLetterBottomBound-char[i]);
          char[i] = (capLetterTopBound + remainder)-1;
        }else if((char[i]<nonCapLetterBottomBound)&&(char[i]>nonCapLetterTopBound)&&(char[i]+shiftFactor)>nonCapLetterBottomBound)
        {
          remainder -= (nonCapLetterBottomBound-char[i]);
          char[i] = (nonCapLetterTopBound + remainder)-1;
        }else
        {
          char[i] += shiftFactor;
        }

        remainder = shiftFactor;
        outputMessage[i] = String.fromCharCode(char[i]);
      }else
      {
        outputMessage[i] = inputMessage[i];
      }
  }
  return outputMessage.join('');
};

// Do not edit below this line
module.exports = caesar;
