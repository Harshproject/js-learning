// //Here it will update the same function again if we calling it without new keyword
// function User(username, email,id){  //we can use same names as arguments by giving this keyword
//     this.username=username
//     this.email=email
//     this.id=id
//     return this
// }

// const ans1= User('mohit','mohit@gmail.com',5)
// const ans2= User('harsh','harsh@gmail.com',5)
// console.log(ans1);      //username: 'harsh',
//                         // email: 'harsh@gmail.com',
//                         // id: 5


//This will only happens if we use 'this' keyword
// function User(username, email,id){  
//     myusername=username
//     myemail=email
//     myid=id
//     return {myusername,myemail,myid}
// }

// const ans1= User('mohit','mohit@gmail.com',5)
// const ans2= User('harsh','harsh@gmail.com',5)
// console.log(ans1);  


//Now with new keyword
function User(username, email,id){  //we can use same names as arguments by giving this keyword
    this.username=username
    this.email=email
    this.id=id
    return this
}

const ans1= new User('mohit','mohit@gmail.com',5)
const ans2= new User('harsh','harsh@gmail.com',5)
console.log(ans1);  //User { username: 'mohit', email: 'mohit@gmail.com', id: 5 }
