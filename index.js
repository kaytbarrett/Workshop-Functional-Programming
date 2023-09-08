// First-class Function

const uppercase = (string) => {
 return string.toUpperCase();
}

console.log(uppercase("Welcome"));


//Higher-order Function

const inputArray =  ['Hippopotamus', 'King Cobra', 'Giant Panda', 'Crocodile'];

const newArray = inputArray.map(function(str) {
return str.charAt(0).toLowerCase() + str.slice(1);
});

console.log(newArray);


// const lowercase (func) => {
//     return  (arr) => {

//     }
// }


//Currying Function