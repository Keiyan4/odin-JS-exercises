const fibonacci = function(num) {

    num = Number(num);

    if (num !== parseInt(num)) return fibonacci;

    if(num < 0) return "OOPS";
    if(num === 0) return 0;
    if(num === 1 || num === 2) return 1;

    return fibonacci(num-1) + fibonacci(num-2);
  
};

fibonacci(6);

// Do not edit below this line
module.exports = fibonacci;
