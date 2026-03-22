const arr= [1,2,3,4,"jjj",true];
// console.log(arr);
// console.log(typeof arr);
// console.log(arr.length);

arr.pop();
// console.log(arr);

arr.push("new item");
// console.log(arr);

// console.log(arr.includes(3));

const str = arr.join("-");
// console.log(str);


//slice and splice: slice does not modify the original array, 
// while splice modifies the original array
const arr2= [1,2,3,4,5];
const slicedArr= arr2.slice(1,4);
// console.log(slicedArr); //Output: [2,3,4]
// console.log(arr2); //Output: [1,2,3,4,5]


const arr3 = arr2.splice(2,1);
// console.log(arr3); //Output: [3]
// console.log(arr2); //Output: [1,2,4,5]


//push one array into another array
const arr4= [6,7,8];
arr2.push(arr4);
console.log(arr2); //Output: [ 1, 2, 4, 5, [ 6, 7, 8 ] ]

const arr5= [9,10];
arr4.push(...arr5);
console.log(arr4); //Output: [ 6, 7, 8, 9, 10 ]

const arr6= [11,12];
const concatenatedArr = arr4.concat(arr6);
console.log(concatenatedArr); //Output: [ 6, 7, 8, 9, 10, 11, 12 ]

//Note: push modifies the original array, 
// while concat does not modify the original array and returns a new array.


//spread operator
const arr7= [...arr4, ...arr6];
console.log(arr7); //Output: [ 6, 7, 8, 9, 10, 11, 12 ] 

//flattening an array
const arr8= [1,2,[3,4,[2]],5];
const flattenedArr= arr8.flat();
const flattenedArr2= arr8.flat(Infinity);
console.log(flattenedArr); //Output: [ 1, 2, 3, 4, 5 ]
console.log(flattenedArr2); //Output: [ 1, 2, 3, 4, 2, 5 ]

//convert string to array
const str2= "Hello world";
console.log(Array.from(str2)); //Output: [ 'H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd' ]
console.log(Array.from({name: "Hello world"})); //Output: [ undefined ]

console.log(Array.from({name: "Hello world"}, (item, index) => index)); //Output: [ 0 ]





