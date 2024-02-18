
console.log("*************************Step 1*****************************");

const Employees = {
  Empid: 122,
  firstName: "Ashwini",
  lastName : "Bagal",
  role : "Angular Developer"
}
console.log("===============De-Structuring================");

var{Empid ,firstName, lastName, role}  = Employees;

console.log(Empid);
console.log(firstName);
console.log(lastName);
console.log(role);
console.log("==============Using for-in loop====================");

for (const key in Employees) {
  
    console.log(`${key}  : ${(Employees as any)[key]}`);
        
}

console.log("*********************************Step 2***********************************");

const vaccination : Array<String> = ['J&J', 'Pfizer', 'Sputnik'];
// var [f,g,h] = vaccination
// console.log(f);
// console.log(g);
// console.log(h);
console.log(`Original Array: ${vaccination}`);
vaccination.push('Covaxin');
console.log(`Added New Vaccin :${vaccination}`);

console.log("===============Using for in loop================");

for (const key in vaccination) {
   console.log(vaccination[key]);
  }

//   console.log("===============Using for of loop================");


// for (const iterator of vaccination) {
  
//   console.log(iterator);
  

// }







