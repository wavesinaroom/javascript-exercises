
const ftoc = function(fahrenheit) {
  let celsius = (fahrenheit-32)*(5/9);
  celsius = Math.round(celsius*10)/10;
  return celsius;
};

const ctof = function(celsius) {
  let fahrenheit = (celsius*(9/5))+32;
  fahrenheit = Math.round(fahrenheit*10)/10;
  return fahrenheit;
};

ftoc(32);
ctof(0);
ftoc(100);
ctof(73.2);
ftoc(-100);
ctof(-10);

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
