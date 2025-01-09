const removeFromArray = function(array, ...toBeRemoved) {
    return array.filter(items => !toBeRemoved.includes(items));


}; 
removeFromArray([1, 2, 3], "1", 3);
// Do not edit below this line
module.exports = removeFromArray;
