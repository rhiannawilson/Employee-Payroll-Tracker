// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Assigning employeesArray with a blank empty array so that we can add data to it
let employeesArray = [];

// Creating a function that lets gather the information from the prompts and collect it as an object to be put in our array.
function createEmployee(firstName, lastName, salary){
  return {firstName, lastName, salary}
}


// Collect employee data
// this creates a prompt at the top of the page for the first name
// created a cancel button, a condition to cancel adding anymore employees 
const collectEmployees = function() {
  let cancelPrompt = false;
  while (!cancelPrompt) {
  let first = prompt(`Enter first name:`);
    if (first === null || first.trim() === ''){
      const confirmation = confirm(`Please confirm you would like to stop adding employees?`);
      if (confirmation){
        cancelPrompt = true;
        break;  
      }
      else{
        continue;
      }
    }

    // last name prompt 
    let last = prompt(`Enter last name:`);
    
    // confirmation checks again
    if (last === null || last.trim() === ''){
      const confirmation = confirm(`Please confirm you would like to stop adding employees?`);
      if (confirmation){
        cancelPrompt = true;
        break;  
      }
      else{
        continue;
      }
    }    
  
  // salary prompt 
    let sal = prompt(`Enter the employees salary:`);
    // confirmation checks again
    if (sal === null || sal.trim() === ''){
      const confirmation = confirm(`Please confirm you would like to stop adding employees?`);
      if (confirmation){
        cancelPrompt = true;
        break;  
      }
      else{
        continue;
      }
    }

    // Ensuring the salary is a number value 'isNan' 
    if (isNaN(sal)) {
      sal = 0;
    }
    else {
      sal = parseFloat(sal)
    }  

    // creates a new variable called newEmployee with the  information we receive from the prompts
    let newEmployee = createEmployee(first, last, sal);
    employeesArray.push(newEmployee);

    //add more employees confirmation?
    let addMore = confirm(`Would you like to add another employee?`)
    if (!addMore) {
      cancelPrompt = true;
    }
  }

  // returns the employeesArray data 
  return employeesArray;
}

// average salary displayed and creation of an array / loop
const displayAverageSalary = function(employeesArray) {
  if (employeesArray.length === 0) {
    console.log(`Unable to display average salary as there is no data`)
  }
  else { 
    let averageSal = 0;
    for (let i = 0; i < employeesArray.length; i++) {
      averageSal += employeesArray[i].salary
    }
    averageSal /= employeesArray.length;
    console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${averageSal.toFixed(2)}`);
  }
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  if (employeesArray.length === 0) {
    return null;
  }

  // Select a random index
  let randomIndex = Math.floor(Math.random() * employeesArray.length);

  // Return the random employee object
  return employeesArray[randomIndex];
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