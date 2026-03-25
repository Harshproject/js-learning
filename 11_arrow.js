//when we do this within an object it will give object's current context
const obj= {
    name:"mohit",
    email:"mohit@gmail.com",
    myfun: function(){
        console.log(this);
        
    }
}

obj.myfun();
obj.name="harsh";
obj.myfun();

//Here this will be empty but on browser it will contain window object
//This is the same object which we can use windows functionalities like onclick..etc
console.log(this);

//this inside arrow function will return {} but normal function will return the context
function newFun(){
    let username="mohit"
    console.log(this);
    
}

const newFun2= ()=>{
    console.log(this);
    
}
newFun();
newFun2();

