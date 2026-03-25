//two types of execution context
//Global and functional execution context


let val1=10
let val2=5

function addNum(num1, num2){
    let total = num1+num2;
    return total;
}
let result = addNum(val1,val2);
let result2 = addNum(1,2);

//flow
//step1. Global execution phase -> this
//step2. Memory phase 
// -> val1:undefined
// -> val2:undefined
// -> addNum -> definition
// -> result1:undefined
// -> result2:undefined
//step3. Execution phase
// -> val1=10
// -> val2=5
// -> result1: addNum --> new execution context for the function
//                          ..new variable env -> memory phase
//                             num1: undefined
//                             num2: undefined
//                             total: undefined
//                          ..execution thread -> execution phase
//                              num1=10
//                              num2=5
//                              total=15
//Now result will get back to global execution context
//For the next call of the function, engine will create another phases of it


//call stack
//global exec--addNum(val1,val2)
//pop
//global exec--addNum(1,2)
//pop


//browser pe sources me jaake ek snippet banalo aur phir call stack dekhlo

