const convertToCelsius = function(fahrenheit) {
  let x =5/9;

    let conversion = (fahrenheit-32)*x;
    let rounded = Math.round(conversion*10)/10;

    
    return rounded;
};

convertToCelsius(-100);

const convertToFahrenheit = function(celsius) {
  let x =9/5;

  let conversion = (celsius*x+32);
  let rounded = Math.round(conversion*10)/10;

  
  return rounded;
};

convertToFahrenheit(-10);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
