// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]} C in ${arr.indexOf([i]) + 1} days.`);

    for (let value = 0; value < arr.length; value++) {
      console.log(`${arr[i]} C in ${value + 1} days.`);
    }
    return;
  }
};

console.log("Test Data 1:");
console.log("-------------");
printForecast([17, 21, 23]);
console.log("-------------");
console.log("Test Data 2:");
console.log("-------------");
printForecast([12, 5, -5, 0, 4]);

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}ºC in ${i + 1} days ... `;
//   }
//   console.log('...' + str);
// };
// printForecast(data1);
