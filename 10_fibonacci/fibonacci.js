const fibonacci = function(term) {

  let second = 1;
  let first = 0;
  let result = 0;

  if(term==0)
  {
    return first;
  }

  for (var i = 2; i <= term ; i++) {
    result = second +first;
    first = second;
    second = result;
  }

  return result;
};

// Do not edit below this line
module.exports = fibonacci;
