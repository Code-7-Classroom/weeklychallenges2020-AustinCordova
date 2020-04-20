let numbers = [1, 4, 7];
let numbers2 = [10, 5];
let numbers3 = [1.5, 3, 2.5, 1];

const average1 = (accumulator, currentValue) => accumulator + currentValue;
console.log(`${numbers.reduce(average1)}` / `${numbers.length}`);
sum();

const average2 = (a, b) => a + b;
console.log(`${numbers2.reduce(average2)}` / `${numbers.length}`);
average2();

const average3 = (c, d) => c + d;
console.log(`${numbers3.reduce(average3)}` / `${numbers.length}`);
average3();




