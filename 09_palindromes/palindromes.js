const palindromes = function (string) {

    const alphanumeric = "abcdefghijklmnopqrstuvxyz0123456789";


    let palindromesString = string
    .toLowerCase()
    .split("")
    .filter((char) => alphanumeric.includes(char))
    .join("");

    let reversedString = palindromesString.split("").reverse().join("");

    return reversedString === palindromesString;

    


};

palindromes("");

// Do not edit below this line
module.exports = palindromes;
