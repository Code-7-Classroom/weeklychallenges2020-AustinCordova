let array1 = [1, 2, 3];
let array2 = [3, 6, 4, 5, 2, 1];
let array3 = [3, 3, 3];

const maxNum1 = (array1) => array1;
console.log(`${Math.max.apply(null, array1)}`)

const maxNum2 = (array2) => array2;
console.log(`${Math.max.apply(null, array2)}`)

const maxNum3 = (array3) => array3;
console.log(`${Math.max.apply(null, array3)}`)