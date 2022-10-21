const employee = require('./lib/Employee');
const manager = require('./lib/Manager');
const intern = require('./lib/Intern');
const engineer = require('./lib/Engineer');
const fileSystem = require('fs');
const inquirer = require('inquirer');
const employeeList = [];

const generateHTML = (employeeHTML) =>
	`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet"  href="assets/css/style.css"/>
      <title>Employee Management</title>
  </head>
  <body>
      
  </body>
  </html>`;


const employeeQuestions = [
	{
		name: 'name',
		message: 'What is the employee name?',
		type: 'input',
	},
	{
		name: 'id',
		message: 'what is the employee Id?',
		type: 'input',
	},
	{
		name: 'role',
		message: 'What is the employees role?',
		type: 'list',
		choices: ['Manager', 'Engineer', 'Intern'],
	},
];

function generateQuestions() {
	inquirer.prompt(employeeQuestions).then((employeeInfo) => {
		if (employeeInfo.role === 'Manager') {
			inquirer.prompt([
				{
					name: 'officeNumber',
					message: 'What is the office number?',
					type: 'input',
				},
			]).then((thirdQuestion) => {});
		} else if (employeeInfo.role === 'Engineer') {
			inquirer.prompt([
				{
					name: 'github',
					message: 'What is the employees github link?',
					type: 'input',
				},
			]).then((thirdQuestion) => {});
		} else {
			inquirer.prompt([
				{
					name: 'school',
					message: 'What school is the employee attending?',
					type: 'input',
				},
			]).then((thirdQuestion) => {});
		}
	});
}
