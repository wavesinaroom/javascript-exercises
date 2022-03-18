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

const multiply = function(array) {
	let result = 1;
	for (var i = 0; i < array.length; i++) {
		result *= array[i];
	}
	return result;
};

const power = function(number, power) {
	let result = 1;
	for (var i = 0; i < power ; i++) {
		result *= number;
	}
	return result;
};

const factorial = function(number) {

	if (number==0) {
		return 1;
	}
		return number*factorial(number-1);
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

//Multiply function calls
multiply([2,4]);

//Power funcion calls
power(4,3);

//Factorial function calls
factorial(0);
factorial(1);
factorial(2);
factorial(5);


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
