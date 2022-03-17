const leapYears = function(year) {
  let isLeapYear = false;
  if (year%4==0) {
      isLeapYear = true;
    }
  return isLeapYear;
};

leapYears(1996);
leapYears(1997);
leapYears(34992);

// Do not edit below this line
module.exports = leapYears;
