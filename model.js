const employee = [
   {name:"Luc", position: "Manager", salary:10000},
   {name:"Meril", position: "Programmer", salary: 12000},
   {name:"Johnny", position: "Analyst", salary: 12000},
   {name:"Dareus", position: "Manager", salary: 13000},
   {name:"Azor", position: "Programmer", salary: 11000},
   {name:"Adelson", position: "Manager", salary: 10000},
   {name:"Jackson", position: "Manager", salary: 14000},
   {name:"Maxlor", position: "Manager", salary: 16000},
   {name:"Kenley", position: "Designer", salary: 10000}
]
/*1- Add 1000 to all the Manager salaries in a new array named employeeRaised.
2- Using the new array employeeRaised, add all the Manager salary that are higher than 1200*/

const employeeRaised = employee.map(a=>a.salary+1000).filter(e=>e>12000)

console.log(employeeRaised)
