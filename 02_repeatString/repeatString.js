const repeatString = function(input_string, number) {
  if (number<0) {
    return 'ERROR';
  }

  if (number===0) {
    output_string="";
    return output_string;
  }

    output_string = input_string;
  for (var i = 0; i < number-1; i++) {
    output_string += input_string;
  }
    return output_string;
};

  repeatString("hey",3);
  repeatString("hey",10);
  repeatString("hey",1);
  repeatString("hey",0);
  repeatString("hey",Math.floor(Math.random())*1000);
  repeatString("",15);



// Do not edit below this line
module.exports = repeatString;
