function linebreak(){
    console.log("-------------------------------------");
}

/*
1.	Create an array called ages that contains the following values: 
3, 9, 23, 64, 2, 8, 28, 93.
a.	Programmatically subtract the value of the first element in the 
array from the value in the 
last element of the array (do not use numbers to reference the last
element, find it programmatically, ages[7] – ages[0] is not allowed). 
Print the result to the console.
b.	Add a new age to your array and repeat the step above to ensure 
it is dynamic (works for arrays of different lengths).
c.	Use a loop to iterate through the array and calculate the average 
age. Print the result to the console.
*/

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages[ages.length-1]-ages[0]);
 
ages.push(15);
console.log(ages[ages.length-1]-ages[0]);

let sum = 0;
for(let i = 0; i < ages.length; i++){
    sum = sum + ages[i];    
}
let avgAge = sum/ages.length;
console.log(avgAge);



linebreak();



/**
 * 2.	Create an array called names that contains the following values: 
 * ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
a.	Use a loop to iterate through the array and calculate the average number 
of letters per name. Print the result to the console.
b.	Use a loop to iterate through the array again and concatenate all the names
together, separated by spaces, and print the result to the console.
 */

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let sumOfNames = 0

for (let i = 0; i < names.length; i++){
    sumOfNames = sumOfNames + names[i].length;
}
let avgNames = sumOfNames/names.length
console.log(avgNames);

let newString = ""
for ( let i = 0; i < names.length; i++){
    newString = newString +" "+ names[i]
}

console.log(newString)


//3) last element of an array
//array[array.length - 1]

linebreak();
//4) First element of an array
//array[0]
linebreak();
/**
 * 5.	Create a new array called nameLengths. Write a loop to iterate over
 *  the previously created names array and add the length of each name to the 
 * nameLengths array.
 */


let nameLengths = [];
for( let i = 0; i<names.length; i++){
    nameLengths.push(names[i].length)
}
console.log(nameLengths)
linebreak();

/**
 * 6.	Write a loop to iterate over the nameLengths array and calculate 
 * the sum of all the elements in the array. Print the result to the console
 */

sumOfLengths = 0;
for(let i = 0; i < nameLengths.length; i++){
    sumOfLengths = sumOfLengths + nameLengths[i];
}
console.log(sumOfLengths);

linebreak();
/**
 * 7.	Write a function that takes two parameters, word and n, as arguments 
 * and returns the word concatenated to itself n number of times. (i.e. if I 
 * pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
 */

function word3X(word,n){
    return word.repeat(n)
}
console.log(word3X("Nam", 3));
linebreak();

/**
 * 8.	Write a function that takes two parameters, firstName and lastName, 
 * and returns a full name (the full name should be the first and the last name 
 * separated by a space).
 */

function fullName(firstName, lastName){
    return firstName + " " + lastName;
}
console.log("John", "Smith")
linebreak();

/**
 * 9.Write a function that takes an array of numbers and returns true if the
 *  sum of all the numbers in the array is greater than 100.
 */

function sumGreater100(element){
    let sum = 0
    for (let i = 0; i < element.length; i++){
        sum += element[i]
    }
    if (sum > 100){
        return true;
    } else return false;
}
console.log(sumGreater100([4,5,6,7,80,9]));

linebreak();

/**
 * 10.	Write a function that takes an array of numbers 
 * and returns the average of all the elements in the array
 */
 function avgNumbers(element){
    let sum = 0
    for (let i = 0; i < element.length; i++){
        sum += element[i]
    }
   let avg = sum/element.length;
   return avg;
}
console.log(avgNumbers([4,5,6,7,80,9]));

linebreak();

/**
 * 11.	Write a function that takes two arrays of numbers and returns true 
 * if the average of the elements in the first array is greater than the 
 * average of the elements in the second array.
 */

function arrayComparator(element1, element2){
    let sum1 = 0
    for (let i = 0; i < element1.length; i++){
        sum1 += element1[i]
    }
   let avg1 = sum1/element1.length;
   
   let sum2 = 0
    for (let i = 0; i < element2.length; i++){
        sum2 += element2[i]
    }
   let avg2 = sum2/element2.length;
   
   if ( avg1 > avg2){
    return true
   } else {
    return false;
   }
}

console.log(arrayComparator([4,5,6,7,8,90],[4,5,6,44,8,9]));

linebreak();

/**
 * 12.	Write a function called willBuyDrink that takes a boolean 
 * isHotOutside, and a number moneyInPocket, and returns true if 
 * it is hot outside and if moneyInPocket is greater than 10.50.
 */

function willBuyDrink(isHotOutside, moneyInPocket){
    if ((isHotOutside == true)&&(moneyInPocket >10.50)){
        return true;
    } else {
        return false}
}
console.log(willBuyDrink(true, 6));

linebreak();
/**
 * This functions takes yout yearly salary and returns how much house you can
 * comfortably afford. It takes the parameteres yearlySalary, and current 
 * interest rates
 */

function maxHomeLoan(yearlySalary, interestRate){
    let maxPayment = yearlySalary * (0.023 - (interestRate/1000));
    let maxLoan = maxPayment * 240;
    return maxLoan
}
console.log(maxHomeLoan(77000, 3.0));

