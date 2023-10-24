//Use Arrow Functions to Write Concise Anonymous Functions

const nagic = () => {
    return new Date();
}

//Write arrow functions with Parameters
const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
//console output: [1, 2, 3, 4, 5]