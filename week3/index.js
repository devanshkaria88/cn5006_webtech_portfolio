// Excercise 1

// Defining the function EmployeeInfo
function EmployeeInfo(name, salary) {
  console.log("Welcome " + name + ". Your monthly Salary is " + salary);
}

// Calling the function with different values
EmployeeInfo("John", 50000);
EmployeeInfo("Alice", 60000);
EmployeeInfo("Bob", 70000);

console.log("This is my first program");

// Excercise 2

// Arrow function for EmpSkills
const EmpSkills = (skills) => {
  console.log("Expert in " + skills);
};

// Calling the arrow function
EmpSkills("Java");
EmpSkills("Flutter");
