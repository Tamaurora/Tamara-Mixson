//This is my coding assignment
console.log('coding assignment');
/*
Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!
Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
Use a loop to iterate through the array and calculate the average age.

Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the average number of letters per name.
Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

How do you access the last element of any array?

How do you access the first element of any array?

Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:

let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array

Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

Write a function that takes an array of numbers and returns the average of all the elements in the array.

Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
*/


//Create an array called ages
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
let lastIndex = ages.length - 1;

let result = ages[lastIndex] - ages[0];
console.log(result);
 ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Add a new age to the array
let newAge = 45;
ages.push(newAge);

// Subtract the value of the first element from the value of the last element
let firstElement = ages[0];
let subtractionResult = lastElement - firstElement;
console.log(subtractionResult);

// Add a new age to the array
let newAge = 42;
ages.push(newAge);

// Repeat the subtraction with the updated array
lastIndex = ages.length - 1;
lastElement = ages[lastIndex];
subtractionResult = lastElement - firstElement;
console.log(subtractionResult);

//Create an array called names
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.];
let totalLetters = 0;

//Use a loop to iterate through the array and calculate the average number of letters per name.
for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length;
}

let averageLetters = totalLetters / names.length;
console.log(averageLetters);

// Concatenate all names together separated by spaces
let concatenatedNames = '';

for (let i = 0; i < names.length; i++) {
  concatenatedNames += names[i] + ' ';
}

console.log(concatenatedNames.trim());

//To access the last element of any array in JavaScript, you can use the index array[array.length - 1]

//To access the first element of any array in JavaScript, you can use the index array[0]. 


//Create a new array called nameLengths and write a loop to iterate over the previously created names array.
names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let nameLengths = [3, 5, 3, 5, 4, 3];

for (let i = 0; i < names.length; i++) {
  let name = names[i];
  let length = name.length;
  nameLengths.push(length);
}

console.log(nameLengths);

//Write a loop and calculate the sum of all the elements in the array
nameLengths = [3, 5, 3, 5, 4, 3];
let sum = 0;

for (let i = 0; i < nameLengths.length; i++) {
  sum += nameLengths[i];
}

console.log(sum);

//Write a function that takes two parameters and returns the word concatenated to itself
function concatenateWord(word, n) {
    let result = '';
  
    for (let i = 0; i < n; i++) {
      result += word;
    }
  
    return result;
  }
  //Example
let goodbye = 'goodbye';
let repetitions = 6;
let concatenated = concatenateWord(goodbye, repetitions);
console.log(concatenated);

//Write a function with two parameters of firstName and lastName that returns the full name with a space between
function getFullName(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;
    return fullName;
  }
  
  // Example
  let firstName = 'Tamara';
  let lastName = 'Mixson';
  let fullName = getFullName(firstName, lastName);
  console.log(fullName);

  //Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100
  function isSumGreaterThan100(numbers) {
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    return sum > 100;
  }
  
  // Example 
  let numbers = [20, 30, 40, 15];
  let result = isSumGreaterThan100(numbers);
  console.log(result);

  //Write a function that takes an array of numbers and returns the average of all the elements in the array.
  function calculateAverage(numbers) {
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    let average = sum / numbers.length;
    return average;
  }
  
  // Example
  let numbers = [10, 20, 30, 40, 50];
  let average = calculateAverage(numbers);
  console.log(average);

  //Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
  function isAverageGreaterThan(arr1, arr2) {
    let sum1 = 0;
    let sum2 = 0;
  
    for (let i = 0; i < arr1.length; i++) {
      sum1 += arr1[i];
    }
  
    for (let i = 0; i < arr2.length; i++) {
      sum2 += arr2[i];
    }
  
    let average1 = sum1 / arr1.length;
    let average2 = sum2 / arr2.length;
  
    return average1 > average2;
  }

  //Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
  function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
  }

  //Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
  function generateRandomPassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
  
    return password;
  }
  
  // Example 
  let passwordLength = 8;
  let password = generateRandomPassword(passwordLength);
  console.log("Random Password:", password);
  
  
  //The generateRandomPassword function takes a parameter length specifying the desired length of the password. It uses a pool of characters that includes uppercase letters, lowercase letters, digits, and special characters. The function then iterates length number of times to randomly select characters from the pool and add them to the password string. I created this function because generating random passwords is a common requirement in applications that involve user authentication or password management. It provides a convenient way to generate a password of a specified length using a varied set of characters. The function can be useful in creating strong and secure passwords for users.






