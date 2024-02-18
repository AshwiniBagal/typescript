console.log("*************************Step 1*****************************");
var Employees = {
    Empid: 122,
    firstName: "Ashwini",
    lastName: "Bagal",
    role: "Angular Developer"
};
console.log("===============De-Structuring================");
var Empid = Employees.Empid, firstName = Employees.firstName, lastName = Employees.lastName, role = Employees.role;
console.log(Empid);
console.log(firstName);
console.log(lastName);
console.log(role);
console.log("==============Using for-in loop====================");
for (var key in Employees) {
    console.log("".concat(key, "  : ").concat(Employees[key]));
}
console.log("*********************************Step 2***********************************");
var vaccination = ['J&J', 'Pfizer', 'Sputnik'];
// var [f,g,h] = vaccination
// console.log(f);
// console.log(g);
// console.log(h);
console.log("Original Array: ".concat(vaccination));
vaccination.push('Covaxin');
console.log("Added New Vaccin :".concat(vaccination));
console.log("===============Using for in loop================");
for (var key in vaccination) {
    console.log(vaccination[key]);
}
//   console.log("===============Using for of loop================");
// for (const iterator of vaccination) {
//   console.log(iterator);
// }
