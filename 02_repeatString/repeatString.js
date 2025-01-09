const repeatString = function(string, num) {
    
    if (num < 0) return "ERROR";

    

    let result = "";

    for(i=0; i < num; i++ ) {

        result+= string;
        
    }
    return result; 

} 

let number = Math.floor(Math.random()*100);
console.log(repeatString("", 10));
   

// Do not edit below this line
module.exports = repeatString;

