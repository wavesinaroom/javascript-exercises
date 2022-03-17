const sumAll = function(firstNumber, secondNumber) {
  let result=0;
  if (firstNumber<0||secondNumber<0) {
    return "ERROR";
  }else if (typeof firstNumber!="number"||typeof secondNumber!="number") {
    return "ERROR";
  }

  if (secondNumber>firstNumber) {
    for (var i = firstNumber; i <= (secondNumber+1)-firstNumber; i++) {
      result+=i;
    }
  }else {
    for (var i = secondNumber; i <= (firstNumber+1)-secondNumber; i++) {
      result+=i;
    }
  }
  return result;
};

sumAll(1,4);
sumAll(1,4000);
sumAll(123,1);
sumAll(10, "90");
sumAll(10, [90, 1]);
// Do not edit below this line
module.exports = sumAll;
