
//Try catch method
// const asyncTask = async ()=>{
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json() //Isko execute krne me bhi time lagta h isliye await krna padega warna ye pending promise return kdega
//         console.log(data);
        
//     } catch (error) {
        
//     }
// }
// asyncTask()



//.then() method
//fetch() returns a promise
fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
    
}).catch((err)=>{
    console.log(err);
    
})


//Microtask queue and it is preferred more than task queue
//if the error is 404 then that means request reached the endpoint so that is why it will be considered as resolved

// ┌──────────────────────┐
// │      CALL STACK      │
// └──────────────────────┘
//         │
//         ▼
//    fetch(url)
//         │
//         ▼
// ┌──────────────────────┐
// │        HEAP          │
// │  Promise (pending)   │
// │  fulfillReactions=[] │
// └──────────────────────┘
//         │
//         ▼
// ┌──────────────────────┐
// │       WEB API        │
// │   Network Request    │
// └──────────────────────┘

//         │
//         ▼
// .then(callback1)
//         │
//         ▼
// (temporarily stack me aata hai)
//         │
//         ▼
// callback1 stored in Promise
//         │
//         ▼
// .then(callback2)
//         │
//         ▼
// callback2 stored in Promise

// ┌──────────────────────┐
// │        HEAP          │
// │ Promise:             │
// │ state: pending       │
// │ reactions: [cb1,cb2] │
// └──────────────────────┘

//         │
//         ▼
// ⏳ Network completes (Web API)
//         │
//         ▼
// resolve(response)
//         │
//         ▼
// ┌────────────────────────────┐
// │     MICROTASK QUEUE        │
// │   callback1 (res.json)     │
// └────────────────────────────┘

//         │
//         ▼
// Event Loop → Stack empty?
//         │
//         ▼ YES
//         │
//         ▼
// ┌──────────────────────┐
// │      CALL STACK      │
// │   callback1 runs     │
// └──────────────────────┘
//         │
//         ▼
// res.json() → returns Promise
//         │
//         ▼
// (again pending…)

//         │
//         ▼
// ⏳ JSON parsing complete
//         │
//         ▼
// ┌────────────────────────────┐
// │     MICROTASK QUEUE        │
// │   callback2 (console.log)  │
// └────────────────────────────┘

//         │
//         ▼
// Event Loop → Stack empty?
//         │
//         ▼ YES
//         │
//         ▼
// ┌──────────────────────┐
// │      CALL STACK      │
// │ console.log(data)    │
// └──────────────────────┘