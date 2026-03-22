let myDate= new Date();
console.log(myDate); //Output: current date and time
console.log(myDate.getFullYear()); //Output: current year
console.log(myDate.getMonth()); //Output: current month (0-11)
console.log(myDate.getDate()); //Output: current date (1-31)
console.log(myDate.getHours()); //Output: current hours (0-23)
console.log(myDate.getMinutes()); //Output: current minutes (0-59)
console.log(myDate.getSeconds()); //Output: current seconds (0-59)
console.log(myDate.toString()); //Output: current date and time in string format
console.log(myDate.toLocaleString());   //Output: current date and time in local string format


let myDate2= new Date("2022-01-01");
console.log(myDate2); //Output: 2022-01-01T00:00:00.000Z