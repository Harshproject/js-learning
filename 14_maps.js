const map = new Map();
map.set('IN','INDIA');
map.set('FR','france');
map.set('US','united states');
map.set('ARG','Argentina');

for(const pair of map){
    console.log(pair[0]);
    
}

const obj = {
    name: "mohit",
    email: "mohi@gmail.com"
}

for(const key in obj){
    console.log(obj[key]);
    
}


// for...in
// The for...in statement loops through the enumerable string properties (keys) of an object.
// for...of
// The for...of statement iterates over the values of iterable objects, such as Array, String, Map, and Set.

const arr = [1,2,3,"ff"]

for(const a of arr){
    console.log(a);
    
}