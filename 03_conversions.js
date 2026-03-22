// How to convert one datatype to another datatype
let someNumber=33;
let someString=String(someNumber);
let someBoolean=Boolean(someNumber);
// let str=undefined

// console.log(someBoolean);
// console.log(typeof someString);
// console.log(typeof someBoolean);
// console.log(Number(str));
let str=null
console.log(Boolean(str))


//string to number
//"33abc" NaN
//"" 0
//" " 0
//null 0
//undefined NaN

// string to boolean
//"" 0
//"ab" 1
//null false
//undefined false

console.log(1+"2") //12
console.log("2"+1)  //21
console.log(1+2+"4") //34
console.log("4"+2+3) //423

