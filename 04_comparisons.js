console.log("2">1);
console.log(null>1);
console.log(null==0);  
console.log(null>0);
console.log(undefined>1);
console.log(null>=0);


//=== It not only checks the value but also checks the datatype
console.log(1==="1");
console.log(1=="1");
 
const id= Symbol("id");
const anotherId= Symbol("id");
console.log(id==anotherId); 
