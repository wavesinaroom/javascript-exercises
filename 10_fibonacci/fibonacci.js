const fibonacci = function(term) {

  let second = 1;
  let first = 0;
  let result = 0;

  if(typeof(term)==="string")
  {
    term = parseInt(term);
  }

  if(term<0)
  {
    return "OOPS";
  }else if(term==0)
  {
    return first;
  }else if(term==1)
  {
    return second; 
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
