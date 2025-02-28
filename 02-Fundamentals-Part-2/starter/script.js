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

LECTURE: Introduction to Arrays

    1. Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called 'populations'

    2. Log to the console whether the array has 4 elements or not (true or false)

    3. Create an array called 'percentages' containing the percentages of the
    world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values.

*/

const populations = [326, 38, 126, .737]

console.log(populations.length === 4);

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];

console.log(percentages);



console.log("---------------------|");




console.log("Assignment 7");
console.log("|---------------------");

/*

LECTURE: Basic Array Operations (Methods)

    1. Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'

    2. At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country. So add it to the end of the 'neighbours' array

    3. Unfortunately, after some time, the new country is dissolved. So remove it from the end of the array

    4. If the 'neighbours' array does not include the country ‘Germany’, log to the console: 'Probably not a central European country :D'

    5. Change the name of one of your neighbouring countries. To do that, find the index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

*/

const neighbours = [canada, mexico];
console.log(neighbours);

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

// if (neighbours.includes("Germany")) 
neighbours.includes("Germany") ? console.log("Probably not a central European country") : console.log("Where is your country?")

neighbours.push("Utopia");
console.log(neighbours);

console.log(neighbours.indexOf("Utopia"));
neighbours[2] = "Alaska";
console.log(neighbours);

console.log("---------------------|");




console.log("Assignment 8");
console.log("|---------------------");

/*

LECTURE: Introduction to Objects

    1. Create an object called 'myCountry' for a country of your choice, containing properties 'country', 'capital', 'language', 'population' and
    'neighbours' (an array like we used in previous assignments)

*/

const myCountry = {
    country: "United States of America",
    capital: "Washington D.C.",
    language: "English",
    population: 326,
    neighbours: [neighbours],

    describe: function() {
        return `${this.country} has ${this.population} million people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
    },

    checkIsland: function() {
        this.isIsland = true ? neighbours === 0 : this.isIsland = false;
        return this.isIsland;
    },
}

console.log(myCountry);
console.log("---------------------|");




console.log("Assignment 9");
console.log("|---------------------");

/*

LECTURE: Dot vs. Bracket Notation

    1. Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'

    2. Increase the country's population by two million using dot notation, and then decrease it by two million using brackets notation.

*/



console.log(`${myCountry.country} has ${myCountry.population} million people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population = myCountry.population + 2;
console.log(myCountry.population);

myCountry["population"] = myCountry.population + 2;
console.log(myCountry.population);

console.log("---------------------|");




console.log("Assignment 10");
console.log("|---------------------");

/*

LECTURE: Object Methods

    1. Add a method called 'describe' to the 'myCountry' object. This method
    will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.

    2. Call the 'describe' method

    3. Add a method called 'checkIsland' to the 'myCountry' object. This
    method will set a new property on the object, called 'isIsland'. isIsland' will be true if there are no neighbouring countries, and false if
    there are. Use the ternary operator to set the property.

*/

console.log(myCountry.describe());
console.log(myCountry.checkIsland());

console.log("---------------------|");




console.log("Assignment 11");
console.log("|---------------------");

/*

LECTURE: Iteration: The for Loop

    1. There are elections in your country! In a small town, there are only 50 voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'

*/

for(let i = 0; i <= 50; i++) {
    console.log(`Voter ${i} is currently voting`);
};


console.log("---------------------|");




console.log("Assignment 12");
console.log("|---------------------");

/*

LECTURE: Looping Arrays, Breaking and Continuing

    1. Let's bring back the 'populations' array from a previous assignment

    2. Use a for loop to compute an array called 'percentages2' containing the
    percentages of the world population for the 4 population values. Use the
    function 'percentageOfWorld1' that you created earlier

    3. Confirm that 'percentages2' contains exactly the same values as the
    'percentages' array that we created manually in the previous assignment,
    and reflect on how much better this solution is

*/
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
};

console.log(percentages2);


console.log("---------------------|");




console.log("Assignment 13");
console.log("|---------------------");

/*

LECTURE: Looping Backwards and Loops in Loops

    1. Store this array of arrays into a variable called 'listOfNeighbours'
    [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

    2. Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country

    3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway 😉

*/

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++) {
    console.log(`Neighbor: ${listOfNeighbours[i]}`);

    // for (let ) {
    //     console.log();
    // };
};


console.log("---------------------|");




console.log("Assignment 14");
console.log("|---------------------");

/*

LECTURE: The while Loop

    1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', but this time using a while loop (call the array 'percentages3')

    2. Reflect on what solution you like better for this task: the for loop or the while loop?

*/

const percentages3 = [];

// while (percentages3 < populations.length) {
//     percentages3.push(percentageOfWorld1(populations[i]));
// };

console.log(percentages3)


console.log("---------------------|");
