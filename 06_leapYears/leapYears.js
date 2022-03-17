const leapYears = function(year) {
  let isLeapYear = false;

  if (year%4==0) {
    isLeapYear = true;
  }
  if (year%400==0) {
    isLeapYear = true;
  }
  if (year%100==0) {
    isLeapYear = false;
  }
  return isLeapYear;
};

leapYears(1996);
leapYears(1997);
leapYears(34992);
leapYears(1900);

// Do not edit below this line
module.exports = leapYears;
