// const promiseOne= new Promise((resolve,reject)=>{
//     //Do async task
//     //DB calls, cryptography, network calls
//     setTimeout(() => {
//         console.log("Async task is completed");
        
//     }, 1000);
// })

// ********************************************************************************************************

// const promiseOne= new Promise((resolve,reject)=>{
//     //Do async task
//     //DB calls, cryptography, network calls
//     setTimeout(() => {
//         console.log("Async task is completed");
        
//     }, 1000);
// })

// promiseOne.then(()=>{
//     console.log("promise resolved");
    
// })


//**************************************************************************************************************************/
//When we write resolve then only .then() will gets executed
// const promiseOne= new Promise((resolve,reject)=>{
//     //Do async task
//     //DB calls, cryptography, network calls
//     setTimeout(() => {
//         console.log("Async task is completed");
//         resolve()
//     }, 1000);
// })

// promiseOne.then(()=>{
//     console.log("promise resolved");
    
// })


//***************************************************************************************************** */
//How to send data into .then()

// const promiseOne= new Promise((resolve,reject)=>{
//     //Do async task
//     //DB calls, cryptography, network calls
//     setTimeout(() => {
//         console.log("Async task is completed");
//         resolve({name:"mohit",email:"harsh@gmail.com"})
//     }, 1000);
// })

// promiseOne.then((obj)=>{
//     console.log(obj);
    
//     console.log("promise resolved");
    
// })


//*************************************************************************************************************** */
//Case with errors
// const promiseOne= new Promise((resolve,reject)=>{
//     //Do async task
//     //DB calls, cryptography, network calls
//     setTimeout(() => {
//         let error=true;
//         if(!error)
//         resolve({name:"mohit",email:"harsh@gmail.com"})
//         else
//             reject('something went wrong')
//     }, 1000);
// })

// promiseOne.then((obj)=>{
//     console.log("promise resolved");
// }).catch((err)=>{
//     console.log(err); 
// })


//Chaining
// const promiseOne= new Promise((resolve,reject)=>{
//     //Do async task
//     //DB calls, cryptography, network calls
//     setTimeout(() => {
//         let error=false;
//         if(!error)
//         resolve({name:"mohit",email:"harsh@gmail.com"})
//         else
//             reject('something went wrong')
//     }, 1000);
// })

// promiseOne.then((obj)=>{
//     console.log("promise resolved");
//     return obj.name
// }).then((name)=>{
//     console.log(name);
    
// }).catch((err)=>{
//     console.log(err); 
// })


//Finally()
// const promiseOne= new Promise((resolve,reject)=>{
//     //Do async task
//     //DB calls, cryptography, network calls
//     setTimeout(() => {
//         let error=false;
//         if(!error)
//         resolve({name:"mohit",email:"harsh@gmail.com"})
//         else
//             reject('something went wrong')
//     }, 1000);
// })

// promiseOne.then((obj)=>{
//     console.log("promise resolved");
//     return obj.name
// }).then((name)=>{
//     console.log(name);
    
// }).catch((err)=>{
//     console.log(err); 
// }).finally(()=>{
//     console.log('the promise is finally resolved');
    
// })


//Use of try catch block
const promiseOne= new Promise((resolve,reject)=>{
    //Do async task
    //DB calls, cryptography, network calls
    setTimeout(() => {
        let error=false;
        if(!error)
        resolve({name:"mohit",email:"harsh@gmail.com"})
        else
            reject('something went wrong')
    }, 1000);
})

const asyncTask= async ()=>{
    try {
        const response= await promiseOne
        console.log(response);
        
    } catch (error) {
        
    }
}

asyncTask()


// Call Stack:
// -------------
// new Promise() constructor run hota h
// asyncTask()
//    ↓
// await promiseOne
//    ↓
// ⏸️ pause
// ❗ asyncTask removed from stack

// Call Stack now free ✅
// Save the context of this function in closure or context
// (1 sec later...)
//    ↓
// resolve()
//    ↓
// Microtask Queue → resume asyncTask
//    ↓
// console.log runs

// Call Stack:
// -------------
// asyncTask (resumed)
// console.log(...)




