// javascript me har ek cheez jaise array, string etc ek type ke object hi h 
// aur object ka prototype null hota h and aur object ki saari properties hum array ya string kisi me bhi use kar sakte h
//Ek usecase dikhata hun
const arr=[1,2,3]
const str="harsh"

Object.prototype.mohit=()=>{
    console.log('naya method');    
}
arr.mohit();//naya method
str.mohit();//naya method

//Yaha pe ye prove ho raha h ki function bhi ek type ka object hi h
function multiplyBy5(num){
    return num*5
}

multiplyBy5.power=2;

console.log(multiplyBy5(3)); //15
console.log(multiplyBy5.power);//2
console.log(multiplyBy5.prototype);//{}



//Inheritance
// const parent = {
//     name:"mohit",
//     email: 'harsh@gmail.com'
// }

// const child={
//     name:"harsh",
//     __proto__:parent
// }

// console.log(child.email);  //harsh@gmail.com


//Other way of inheritance
const parent = {
    name:"mohit",
    email: 'harsh@gmail.com'
}

const child={
    name:"harsh",
}
Object.setPrototypeOf(child,parent)
console.log(child.email);  //harsh@gmail.com



