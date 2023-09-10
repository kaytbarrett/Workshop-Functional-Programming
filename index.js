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

const animals = ['Hippopotamus', 'King Cobra', 'Giant Panda', 'Crocodile'];

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


//Currying Function



