//Two types of memory: Stack and Heap
//Stack is used for primitive types: number, string, boolean, null, undefined, symbol
//Heap is used for reference types: object, array, function 

//Primitive types are stored in stack and they are immutable
let name="John";
name[0]="j"; //This will not change the value of name because it is immutable
console.log(name); //Output: John

//Reference types are stored in heap and they are mutable
let person={
    name:"John",
    age:30
};
person.name="Jane"; //This will change the value of person.name because it is mutable
console.log(person.name); //Output: Jane


//Strings are primitive types but they are immutable and 
//they are stored as reference types in heap because they are immutable
//eventually garbage collecctor will erase the old string from memory and 
// create a new string in heap with the new value

//same goes with numbers, if we update a number, it will create a new number
//  in heap and the old number will be garbage collected

