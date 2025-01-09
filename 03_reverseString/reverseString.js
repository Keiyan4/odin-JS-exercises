const reverseString = function(string) {
    let splitString = string.split("").reverse().join("");
    return splitString;
};

console.log(reverseString(""));
// Do not edit below this line
module.exports = reverseString;
