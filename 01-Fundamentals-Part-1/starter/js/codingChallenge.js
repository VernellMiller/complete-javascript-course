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
       
       console.log(marksBmi);
       console.log(johnBmi);
       
console.log("-------------------");