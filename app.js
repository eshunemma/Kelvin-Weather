//today's forecast in Kelvin
const kelvin = 0; 
// kelvin converted to celcius
const celsius = kelvin - 273; 
// Calculation of Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// Rounding converted number to whole
fahrenheit = Math.floor(fahrenheit);
// Print The temperature is 68 degrees fahrenheit to console
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// converting celsius to newton
let newton = celsius * (33 / 100);
// Rounding converted number down
newton = Math.floor(newton);
// Print The temperature is 68 degrees newton
console.log(`The temperature is ${newton} degrees newton.`);