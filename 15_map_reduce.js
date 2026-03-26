const arr = [1,2,3,4,5,6,7,8,10]

const newarr=arr.filter((item)=>item>4);

// newarr.forEach((item)=>{
//     console.log(item);
    
// })

const arr1=newarr.map((item)=>item+1000)

// arr1.forEach((it)=>{
//     console.log(it);
    
// })
 console.log(newarr);
 
const iniVal=0;
//Providing in initial value to acc
const arr2= newarr.reduce((acc, item)=>{
    console.log(acc,item);
    return acc+item}
    ,iniVal);

console.log(arr2);

//Not providing initial value

const arr3= newarr.reduce((acc, item)=>{
    console.log(acc,item);
    return acc+item});

console.log(arr3);
