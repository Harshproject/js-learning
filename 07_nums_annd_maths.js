const num = 10;
const num2= new Number(10);

console.log(num);
console.log(num2);

console.log(typeof num);
console.log(typeof num2);

console.log(num==num2);
console.log(num===num2);

const num3= num2.toFixed(2);
const num4= num.toFixed(2);

console.log(num3);
console.log(num4);

const num5= 767.89766;
console.log(num5.toPrecision(4));

const num6 = Number.MAX_VALUE;