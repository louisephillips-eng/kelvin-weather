//This variable will not change //
const kelvin = 275;
//This is a new variable//
const celsius = kelvin - 273;
//the value of fahrenheit//
fahrenheit = celsius *(9/5) + 32;
console.log(fahrenheit);
//to round down fahrenheit//
fahrenheit = Math.floor(fahrenheit);
//The temperature is ... degrees//
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);

newton = celsius *(33/100);
console.log(newton);
newton = Math.floor(newton);
console.log(newton);
console.log(`The temperature is ${newton} degrees fahrenheit.`)


