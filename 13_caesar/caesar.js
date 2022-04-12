const caesar = function(inputMessage, shiftFactor) {

  let char = new Array(inputMessage.length);
  let outputMessage = new Array(inputMessage.length);

  let regEx = /^[a-zA-Z0-9]+$/;

  const capLetterTopBound = 65; // A
  const capLetterBottomBound = 90; // Z

  const nonCapLetterTopBound = 97;  // a
  const nonCapLetterBottomBound = 122; // z

  let wrapBottom;
  let wrapTop;

  for (var i = 0; i < inputMessage.length; i++) {
      //Alpha character
      if(inputMessage[i].match(regEx))
      {
        char[i] = inputMessage.charCodeAt(i);
        //Caps letters
        if((char[i]<=capLetterBottomBound)&&(char[i]>=capLetterTopBound))
        {
          wrapBottom = capLetterBottomBound;
          wrapTop = capLetterTopBound;
        }
        //No caps letters
        else if((char[i]<=nonCapLetterBottomBound)&&(char[i]>=nonCapLetterTopBound))
        {
          wrapBottom = nonCapLetterBottomBound;
          wrapTop = nonCapLetterTopBound;
        }

        //Positive shift
        if(shiftFactor>0)
        {
          for(let j = 0; j<shiftFactor; j++)
          {
            if(char[i]===wrapBottom)
            {
              char[i]=wrapTop-1;
            }
            char[i]++;
          }
        }//Negative shift
        else if(shiftFactor<0)
        {
          for(let l=0; l>shiftFactor; l--)
          {
            if(char[i]===wrapTop)
            {
              char[i]=wrapBottom+1;
            }
            char[i]--;
          }
        }
        outputMessage[i] = String.fromCharCode(char[i]);
      }//Non alpha char
      else
      {
        outputMessage[i] = inputMessage[i];
      }
  }
  return outputMessage.join('');
};

// Do not edit below this line
module.exports = caesar;
