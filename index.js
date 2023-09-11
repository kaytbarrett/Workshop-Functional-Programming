// First-class Function

//Problem 1:
const uppercase = (string) => {
    return string.toUpperCase();
}

console.log(uppercase("Welcome"));

//Problem 2:
const multiplier = (number1) => {
    return function product(number2) {
        return number1 * number2;
    }
}

const multiply = multiplier(3);
console.log(multiply(7));

//Problem 3:

const returnsAnObj = (num1, num2) => {
    return {
        1: num1,
        2: num2
    }

}

console.log(returnsAnObj(7, 9));


//Higher-order Function

//Problem 1:

const animals = ['Hippopotamus', 'King Cobra', 'Giant Panda', 'Crocodile'];

//The Code below works but is not what the instructor was looking for - corrections made in office hours
//Leaving code below as a reminder that there is a different way to do it
// const newArray = inputArray.map(function(str) {
// return str.charAt(0).toLowerCase() + str.slice(1);
// });

const newArray = (arr, func) => {
    const array = [];
    for (i = 0; i < arr.length; i++) {
        array.push(func(arr[i]));
    }
    return array;
}

const modifiedArray = newArray(animals, function (a) {
    return a.toLowerCase();
});

console.log(modifiedArray);

//Problem 2:

function modifyArray(arr, modifier) {
    const modifiedArray = arr.map(modifier);
    return modifiedArray;
}

const resultArray = modifyArray(animals, (element) => element.toUpperCase());

// Find a string with a length of more than 11 characters in the resultArray
const longString = resultArray.find((str) => str.length > 11);

console.log(longString);

//Problem 3:

function modArray(arr, modifier) {
    return arr.map(modifier);
}


function reverseString(input) {
    return input.split('').reverse().join('');
}

const reversedArray = modArray(animals, reverseString);

console.log(reversedArray);

//Problem 4:

//Restate: Create two funcs, one which generates two runners and their speeds and a second that runs a race and determines winner
//Examples: So it would be like runner 1: speed: 6 mph, runner 2: speed: 7 mph, winner is runner 2
// another example would be runner 1: speed: 5mph, runner 2: speed 5mph, there is a tie
//Approach: So first function should have the ability to create a two random speeds that are assigned to a specific runner
// second function should compare these two speeds and determine which speed is higher or if they are the same
// second function will use if/then statements


const generateSpeeds = () => {
    const min = 1;
    const max = 10;
    return {
        runner1: Math.floor(Math.random() * (max - min + 1)) + min,
        runner2: Math.floor(Math.random() * (max - min + 1)) + min,
    }
}

const runners = generateSpeeds();

const whoWinsRace = () => {
if (runners.runner1 === runners.runner2) { 
    return "It is a tie!"
} else if (runners.runner1 < runners.runner2) {
    return "Runner 1 is the winner!"
} else {
    return "Runner 2 is the winner!"
};
}

console.log(whoWinsRace());


//Currying Function



