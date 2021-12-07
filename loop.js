// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen with console.log().

for (let index = 0; index <= 15; index++) {
    if (index % 2 === 0) {
        console.log(`${index} is even number`);
    } else {
        console.log(`${index} is odd number`);
    }

}

// 1. Write a JavaScript function  which takes 1 value and  uses a for loop .The for loop iterates the integers from 1 to the value passed into the function. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

function fizzBuzz(arg) {
    for (let i = 1; i <= arg; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(20);

// 2.  define a variable named total and make it equal the number 0.Define a second variable named limit and make it equal the number 10.Create a for loop with a variable i starting at 0 and increasing by 1 each time through the loop. The loop should run as long as i is less than limit.On each iteration of the loop, add the number i to the total variable. To do this, you can use this statement:total += iAfter the for loop, use console.log() to print the total variable to the terminal.

let total = 0;
let limit = 10;

for (let i = 0; i < limit; i++) {
    total = total + i;
}
console.log(total)

// 3 define an array variable named pets.It holds 3 values cat, dog, rabbit Create a for loop that changes each string in the array so that they are plural. Use console.log to print the modified array.

let pets = ['cat', 'dog', 'rabbit'];

for (let i = 0; i < pets.length; i++) {
    newPets = pets[i] + 's';
    updatedPets = pets.splice(i, 1, newPets);
}
console.log(pets);

// 4 define an array variabe names that has 7 values: pearl jewel prince andy irene charles nadine. use a for loop to iterate through this array.in each iteration change the first letter of each name to uppercase.Create a new empty array called newNames and push each transformed name there.Use console.log to print the newName array.

let names = ['pearl', 'jewel', 'prince', 'andy', 'irene', 'charles', 'nadine']
let newNames = [];
for (let i = 0; i < names.length; i++) {
    arrayName = names[i].split("");
    storeFirstLetter = arrayName[0];
    check = storeFirstLetter.toUpperCase();
    updatedName = arrayName.splice(0, 1, check);
    uppercaseName = arrayName.join("");
    newNames.push(uppercaseName);
}
console.log(newNames)

// 5 Write a function vowel_count which has one arguement and counts the number of vowels in a given string.Define a variable wowel_list and asign aeiouAEIOU to it. declare another variable vcount and initialize it with 0; write a for loop whose condition for repeating is less than the length of the received arguemnt.within the for loop use an if statement with the indexOf method to check if the values in the given string are present in the vowel_count variable. whenever a character is present in vowel_count, vcount increments by 1. if the character is not present, -1 is returned and vcount is not incremented return the value of vcount.use console.log to call vowel_count pass in this string: The quick brown fox

function vowel_count(arg) {
    let vowel_list = 'aeiouAEIOU';
    let vowelListArray = vowel_list.split("");
    let vcount = 0;

    let argArray = arg.split("");
    for (i = 0; i <= argArray.length; i++) {
        if (vowelListArray.indexOf(argArray[i]) != -1) {
            vcount = vcount + 1;
        }

    }
    console.log(vcount);
}
vowel_count('The quick brown fox')