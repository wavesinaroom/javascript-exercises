const caesar = function(inputMessage, shiftFactor) {

  let char = new Array(inputMessage.length);
  let outputMessage = new Array(inputMessage.length);

  let regEx = /^[a-zA-Z0-9]+$/;

  const capLetterTopBound = 65; // A
  const capLetterBottomBound = 90; // Z

  const nonCapLetterTopBound = 97;  // a
  const nonCapLetterBottomBound = 122; // z

  for (var i = 0; i < inputMessage.length; i++) {
      if(inputMessage[i].match(regEx))
      {
        char[i] = inputMessage.charCodeAt(i);
        //Positive shift
        if(shiftFactor>0)
        {
          //Caps letters
          if((char[i]<=capLetterBottomBound)&&(char[i]>=capLetterTopBound))
          {
            for(let j = 0; j<shiftFactor; j++)
            {
              if(char[i]===capLetterBottomBound)
              {
                char[i]=capLetterTopBound-1;
              }
              char[i]++;
            }
          }
          //No caps letters
          else if((char[i]<=nonCapLetterBottomBound)&&(char[i]>=nonCapLetterTopBound))
          {
            for(let k = 0; k<shiftFactor; k++)
            {
              if(char[i]===nonCapLetterBottomBound)
              {
                char[i]=nonCapLetterTopBound-1;
              }
              char[i]++;
            }
          }
          //Non alpha
          else
          {
            char[i] += shiftFactor;
          }
        }//Negative shift
        else if(shiftFactor<0)
        {
          //Caps letters
          if((char[i]<=capLetterBottomBound)&&(char[i]>=capLetterTopBound))
          {
            for(let l=0; l>shiftFactor; l--)
            {
              if(char[i]===capLetterTopBound)
              {
                char[i]=capLetterBottomBound+1;
              }
              char[i]--;
            }
          }//Non caps
          else if((char[i]<=nonCapLetterBottomBound)&&(char[i]>=nonCapLetterTopBound))
          {
            for(let l=0; l>shiftFactor; l--)
            {
              if(char[i]===nonCapLetterTopBound)
              {
                char[i]=nonCapLetterBottomBound+1;
              }
              char[i]--;
            }
          }
          //Non alpha
          else
          {
            char[i] += shiftFactor;
          }
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
