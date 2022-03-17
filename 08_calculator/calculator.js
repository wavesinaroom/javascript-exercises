const add = function(inputOne, inputTwo) {
	if (inputOne<0||inputTwo<0) {
		return "ERROR";
	}
	result = inputOne + inputTwo;
	return result;
};

const subtract = function(inputOne, inputTwo) {
	result = inputOne - inputTwo;
	return result;
};

const sum = function() {

};

const multiply = function() {

};

const power = function() {

};

const factorial = function() {

};

//Add function calls
add(0,0);
add(2,2);
add(2,6);

//subtract function calls
subtract(10,4); 



// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
