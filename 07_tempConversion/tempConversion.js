
const ftoc = function(fahrenheit) {
  let celsius = (fahrenheit-32)*(5/9);
  return celsius;
};

const ctof = function(celsius) {
  let fahrenheit = (celsius*(9/5))+32;
  return fahrenheit;
};

ftoc(32);
ctof(0);

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
