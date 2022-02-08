console.log("-------------------");
console.log("Coding Challenge 1");

/*

Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
    and height in meter).
    
    Your tasks:
    
    1. Store Mark's and John's mass and height in variables
    
    2. Calculate both their BMIs using the formula (you can even implement both
        versions)
        
        3. Create a Boolean variable 'markHigherBMI' containing information about
        whether Mark has a higher BMI than John.
        
        Test data:
        
        § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
        m tall.
        
        § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
        m tall.
        
        GOOD LUCK 😀
        
*/
       
// let marksMass = 78;
// let marksHeight = 1.69;
       
// let johnsMass = 92;
// let johnsHeight = 1.95;
       
let marksMass = 95;
let marksHeight = 1.88;
       
let johnsMass = 85;
let johnsHeight = 1.76;
       
const marksBmi = marksMass / marksHeight ** 2;
const johnBmi = johnsMass / (johnsHeight * johnsHeight);
       
const markHigherBMI = marksBmi > johnBmi;
       
console.log(marksBmi);
console.log(johnBmi);
console.log(markHigherBMI);
       
       
marksMass = 95;
marksHeight = 1.88;
       
johnsMass = 85;
johnsHeight = 1.76
       
console.log("-------------------");

console.log("-------------------");
console.log("Coding Challenge 2");

/*

Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.

    Your tasks:

    1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

    2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement 😉

GOOD LUCK 😀 

*/

if (marksBmi > johnBmi) {
    console.log(`Mark's BMI(${marksBmi}) is higher than John's BIM(${johnBmi})`)
} else {
    console.log(`John's BMI(${johnBmi})  is higher than Mark's BMI(${marksBmi})`)
}

console.log("-------------------");

console.log("-------------------");
console.log("Coding Challenge 3");

/*

Coding Challenge #3

There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:

    1. Calculate the average score for each team, using the test data below

    2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

    3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉

    4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
    both teams have the same score and both have a score greater or equal 100
    points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀

*/

const dolphinsAverage = (96 + 108 + 89) / 3;
const koalasAverage = (88 + 91 + 110) / 3;

if (dolphinsAverage > koalasAverage) {
    console.log(`The Dolphins average(${dolphinsAverage}) is greater than The Koalas average(${koalasAverage})`)
} else if (dolphinsAverage === koalasAverage){
    console.log("It's a draw.")
} else {
    console.log(`The Koalas average(${koalasAverage}) is greater than The Dolphins average(${dolphinsAverage})`)
}

console.log("-------------------");