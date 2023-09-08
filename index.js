// First-class Function

const uppercase = (string) => {
 return string.toUpperCase();
}

console.log(uppercase("Welcome"));


//Higher-order Function

const animals =  ['Hippopotamus', 'King Cobra', 'Giant Panda', 'Crocodile'];

// const newArray = inputArray.map(function(str) {
// return str.charAt(0).toLowerCase() + str.slice(1);
// });

const newArray = (arr, func) => {
    const array = [];
    for(i = 0; i < arr.length; i++ ) {
        array.push(func(arr[i]));
    }
        return array;
}

const modifiedArray = newArray(animals, function(a) {
    return a.toLowerCase();
});

console.log(modifiedArray);


//Currying Function

