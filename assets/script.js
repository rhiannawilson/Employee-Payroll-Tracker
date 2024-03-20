// Collect Employees Function
  // Create an array to hold employee data (done)
  // Loop until the user chooses to stop
  // Get user input for an employee
  // If salary is not a number set it to zero
  // Create an employee object
  // Convert the salary to a float
  // Add the employee object to the end of the employees array
  // Ask the user if they want to continue adding employees
  // Return the employee data

// DISPLAY AVERAGE SALARY FUNCTION
  // Initialise totalSalary
  // Workout Number of employees
  // Loop through employees Array and add employee salaries to totalSalary variable
  // Calculate the average salary

// GET RANDOM EMPLOYEE FUNCTION
  // Research how to get a random index from an array and get it from employee array

  // ID's in HTML 
  //   <div class="wrapper">
  // <div class="card">
  // <div class="card-header">
  // <div class="card-body">

// 
// tbody id="employee-table">
// div class="card-footer">
// button id="add-employees-btn" class="btn">Add Employees</button>


// {
//   name: "juan",
//   school: "edx",
//   hobby: "baseball"
// }

// let example = {
//   name: "juan",
//   school : "edx",
//   favNumber: 2
// }


// example.name // juan
// console.log(example.name) //juan

// let fruits = ["apple", "bannana", "melon"];
// console.log(fruits)
// console.log(fruits[1]);

// fruits.push("kiwi");
// console.log(fruits)









// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
console.log (addEmployeesBtn)

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let employeeList = [];

  let firstNameInput = prompt ("What is your first name");
  let lastNameInput = prompt ("What is your last name");
  let salaryInput = prompt ("What is your salary");


  let employyeObject = {
    firstName: firstNameInput,
    lastName: lastNameInput,
    salary: salaryInput
  }
  console.log(employyeObject)

  employeeList.push(employyeObject)
  console.log(employeeList)

  let reRunQuestions = confirm("do you want to add another employye?");
  console.log(reRunQuestions)

  return employeeList;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}



















/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);