// bmi.js

let inches = 72;                // 1 inch = 2.54 centimetres.
let pounds = 180;               // 2.2046 pounds in a kilo
let weight = pounds / 2.2046;   // in kilos
let height = inches * 2.54;     // height in centimetres
console.log(weight, height);

let bmi = weight/(height/100*height/100);
console.log(bmi);

