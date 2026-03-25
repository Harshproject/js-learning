//There ar some functions which you immediately wanna execute after you write its definition
//We do this to escape from the interference of any global variable inside the function
//To achieve this we use iffe
(function myfun(){
    console.log("DB connected");
    
})();


//you have to apply ; after you end the iffe

((name)=>{
    console.log(`${name}! hello `);
})("mohit")