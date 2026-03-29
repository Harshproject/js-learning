const descripter = Object.getOwnPropertyDescriptor(Math,'PI')
console.log(descripter);


const obj = {
    name:"harsh",
    email:"harsh@gmail.com"
}
const descripter2 = Object.getOwnPropertyDescriptor(obj,'name')
console.log(descripter2);

Object.defineProperty(obj,'name',{
  writable: false,
  enumerable: false,
  configurable: true
})
const descripter3 = Object.getOwnPropertyDescriptor(obj,'name')
console.log(descripter3);

//Since enumaerable is false then 'name' property should not be iterated
for(const [key, value] of Object.entries(obj)){ //email: harsh@gmail.com --> only this not name
    console.log(`${key}: ${value}`);
    
}



