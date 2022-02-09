"use strict";

console.log("Assignment 1");
console.log("|---------------------");

/*

LECTURE: Functions

    1. Write a function called 'describeCountry' which takes three parameters:
    'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'

    2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console

*/

function describeCountry(country, population, capitalCity) {
    const description = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
    return description;
};

const usa = describeCountry("United States of America", 326, "Washington D.C." );
const canada = describeCountry("Canada", 38 , "Ottawa");
const mexico = describeCountry("Mexico", 126, "Mexico City");

console.log(usa);
console.log(canada);
console.log(mexico);

console.log("---------------------|");



console.log("Assignment 2");
console.log("|---------------------");

/*

LECTURE: Function Declarations vs. Expressions

    1. The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population

    2. To calculate the percentage, divide the given 'population' value by 7900
    and then multiply by 100

    3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
    store the results into variables, and log them to the console

    4. Create a function expression which does the exact same thing, called
    'percentageOfWorld2', and also call it with 3 country populations (can be
    the same populations)

*/

// FUNCTION DECLARATION
console.log("FUNCTION DECLARATION")

function percentageOfWorld1(population) {
    return population / 7900 * 100;
};

const usaPercentage = percentageOfWorld1(326);
const canadaPercentage = percentageOfWorld1(38);
const mexicoPercentage = percentageOfWorld1(126);

console.log(usaPercentage);
console.log(canadaPercentage);
console.log(mexicoPercentage);

// FUNCTION EXPRESSION
console.log("FUNCTION EXPRESSION")

const percentageOfWorld2 = function(population) {
    return population / 7900 * 100;
}

const usaPercentage2 = percentageOfWorld2(326);
const canadaPercentage2 = percentageOfWorld2(38);
const mexicoPercentage2 = percentageOfWorld2(126);

console.log(usaPercentage2);
console.log(canadaPercentage2);
console.log(mexicoPercentage2);

console.log("---------------------|");




console.log("Assignment 3");
console.log("|---------------------");

/*

LECTURE: Arrow Functions

    1. Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'

*/

const percentageOfWorld3 = population => population / 7900 * 100;

const usaPercentage3 = percentageOfWorld2(326);
const canadaPercentage3 = percentageOfWorld2(38);
const mexicoPercentage3 = percentageOfWorld2(126);

console.log(usaPercentage3);
console.log(canadaPercentage3);
console.log(mexicoPercentage3); 

console.log("---------------------|");




console.log("Assignment 4");
console.log("|---------------------");

/*

LECTURE: Functions Calling Other Functions

    1. Create a function called 'describePopulation'. Use the function type you
    like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'

    2. To calculate the percentage, 'describePopulation' call the 'percentageOfWorld1' you created earlier

    3. Call 'describePopulation' with data for 3 countries of your choice

*/

console.log("---------------------|");




console.log("Assignment 5");
console.log("|---------------------");

/*

LECTURE: Functions Calling Other Functions

    1. Create a function called 'describePopulation'. Use the function type you
    like the most. This function takes in two arguments: 'country' and
    'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'

    2. To calculate the percentage, 'describePopulation' call the 'percentageOfWorld1' you created earlier

    3. Call 'describePopulation' with data for 3 countries of your choice

*/

function describePopulation(country, population) {
    const percent= percentageOfWorld1(population)

    const description = `${country} has ${population} million people which is ${percent} of the world.`;
    return description;
};

const usa2 = describePopulation("United States of America", 326);
const canada2 = describePopulation("Canada", 38);
const mexico2 = describePopulation("Mexico", 126);

console.log(usa2);
console.log(canada2);
console.log(mexico2);

console.log("---------------------|");




console.log("Assignment 6");
console.log("|---------------------");

/*



*/

console.log("---------------------|");




console.log("Assignment 7");
console.log("|---------------------");

/*



*/

console.log("---------------------|");




console.log("Assignment 8");
console.log("|---------------------");

/*



*/

console.log("---------------------|");




console.log("Assignment 9");
console.log("|---------------------");

/*



*/

console.log("---------------------|");




console.log("Assignment 10");
console.log("|---------------------");

/*



*/

console.log("---------------------|");




console.log("Assignment 11");
console.log("|---------------------");

/*



*/

console.log("---------------------|");




console.log("Assignment 12");
console.log("|---------------------");

/*



*/

console.log("---------------------|");




console.log("Assignment 13");
console.log("|---------------------");

/*



*/

console.log("---------------------|");
