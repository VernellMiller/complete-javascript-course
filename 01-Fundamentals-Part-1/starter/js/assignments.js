console.log("Assignment 1");
console.log("-------------------");

/* 

LECTURE: Values and Variables

1. Declare variables called 'country', 'continent' and 'population' and 
assign their values according to your own country (population in millions)

2. Log their values to the console

*/

let country = "United States of America";
let continent = "North America";
let population = 364290000;

console.log(`I live on the continent of ${continent} in the country ${country}. It has a population of ${population} in million. Where do you live?`);

console.log("-------------------");

console.log("Assignment 2");
console.log("-------------------");

/* 

LECTURE: Data Types

1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet

2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console

*/

let isIsland = "False";
let language;

console.log(typeof true);
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

console.log("-------------------");

console.log("Assignment 3");
console.log("-------------------");

/* 

LECTURE: let, const and var

1. Set the value of 'language' to the language spoken where you live (some
    countries have multiple languages, but just choose one)
    
    2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
    
    3. Try to change one of the changed variables now, and observe what happens
    
*/
   
language = "English";

console.log("-------------------");   

console.log("Assignment 4 & 5");
console.log("-------------------");
   
/* 
   
LECTURE: Basic Operators
   
1. If your country split in half, and each half would contain half the population, then how many people would live in each half?
   
2. Increase the population of your country by 1 and log the result to the console

3. Finland has a population of 6 million. Does your country have more people than Finland?

4. The average population of a country is 33 million people. Does your country
have less people than the average country?

5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese'

*/
let halfPop = population / 2;
let addPop = population + 1;
let findlandPop = 100000;
const averageCountryPop = 330000000;
const description = `${country} is in ${continent}, and its ${population} people speak ${language}.`;

console.log(`${halfPop} in millions is half the population of ${country}`);
console.log(addPop);
console.log(population > findlandPop);
console.log(findlandPop > population);
console.log(population > averageCountryPop);
console.log(description);

console.log("-------------------");   

console.log("Assignment 6");
console.log("-------------------");

/* 

LECTURE: Taking Decisions: if / else Statements

1. If your country's population is greater that 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)

2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original

*/

if (country > averageCountryPop) {
    console.log(`${country}'s population is above average.`);
} else {
    const remainder = population % averageCountryPop;
    console.log(`${country}'s population is ${(population - averageCountryPop)} million below average`);
};

console.log("-------------------");

console.log("Assignment 7");
console.log("-------------------");
/*

LECTURE: Type Conversion and Coercion

1. Predict the result of these 5 operations without executing them:
'9' - '5';
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;

2. Execute the operations to check if you were right

*/

// line 1 will log - 4
// line 2 will log - 23
// line 3 will log - 11
// line 4 will log - false
// line 5 will log - 16

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

console.log("-------------------");

