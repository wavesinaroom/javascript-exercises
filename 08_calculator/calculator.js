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

const sum = function(array) {
	let result = 0;
	for (var i = 0; i < array.length; i++) {
		result += array[i];
	}
	return result;
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

//sum function calls
sum([]);
sum([7]);
sum([7,11]);
sum([1,3,5,7,9]);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
