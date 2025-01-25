const add = function(first, second) {
	
  let sum = first + second;
  return sum;
};

add(0,0);

const subtract = function(first, second) {

  let difference = first - second;
  return difference;

};
subtract(10,6);



const sum = function(arr) {
 
  let reducedArr = arr.reduce((total, number) => total + number, 0);
  return reducedArr;

	
};
sum([]);

const multiply = function(arr) {

  let reducedProduct = arr.reduce((total, number) => total*number, 1);
  return reducedProduct;

};
multiply([]);



const power = function(first, second) {

  let poweredNumber = first ** second;
  return poweredNumber;
	
};
power(4,3);

const factorial = function(num) {
  if (num === 0 || num === 1){
    return 1;
  }
  let result = 1;
  for (i=2; i<=num; i++){
    result*= i;
  }
	return result;
};

factorial(0);
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
