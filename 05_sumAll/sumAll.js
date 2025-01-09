const sumAll = function(input1, input2) {

    if(!Number.isInteger(input1) || !Number.isInteger(input2)) return "ERROR";

    if (input1 < 0 || input2 < 0) return "ERROR";

    if (input1 > input2) [input1, input2]=[input2, input1];


    let accuSum = 0;

    for (let i=input1; i<=input2; i++){
        accuSum += i;

    }
    return accuSum;

   
};

sumAll(-5, 1);
// Do not edit below this line
module.exports = sumAll;
