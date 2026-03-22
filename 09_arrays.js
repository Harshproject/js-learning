const arr= [1,2,3,4,"jjj",true];
console.log(arr);
console.log(typeof arr);
console.log(arr.length);

arr.pop();
console.log(arr);

arr.push("new item");
console.log(arr);

console.log(arr.includes(3));

const str = arr.join("-");
console.log(str);


//slice and splice: slice does not modify the original array, 
// while splice modifies the original array
const arr2= [1,2,3,4,5];
const slicedArr= arr2.slice(1,4);
console.log(slicedArr); //Output: [2,3,4]
console.log(arr2); //Output: [1,2,3,4,5]


const arr3 = arr2.splice(2,1);
console.log(arr3); //Output: [3]
console.log(arr2); //Output: [1,2,4,5]