// function myFun(){
//     this.name="mohit"
//     console.log(this);
    
// }

// function newFun(){
//     this.myFun=myFun
//     console.log(this);
    
// }

// myFun()
// newFun()


//To attach all the properies of other functions we will use call
function myFun(){
    this.username="harsjh"
    console.log('myFun');
    
}

function newFun(){
    console.log( 'newFun');
    myFun.call(this)
    this.yoyo="yoyo"
    console.log(this);
    
}
newFun() 
const obj = new newFun()
console.log(obj);
 

