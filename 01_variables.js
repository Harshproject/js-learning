let greeting = 'Hello, World!';
const first_name = 'Alice';
let last_name;

console.table([greeting, first_name, last_name]);

// Note: We don’t use var anymore because var had a 
// problem of defining scope, if we have declared 
// var 10 times with same name then it will update 
// on all the places, because of this problem JS 
// introduced let which is scope specific.