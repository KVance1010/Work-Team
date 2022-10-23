const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const fileSystem = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const generateHTML = require('./src/buildHTML');
const employeeList = [];

const employeeQuestions = [
	[
		{
			name: 'name',
			message: 'What is the employee name?',
			type: 'input'
		},
		{
			name: 'id',
			message: 'what is the employee Id?',
			type: 'input'
		},
		{
			name: 'email',
			message: 'What is the email?',
			type: 'input'
		}
	],
	[
		{
			name: 'officeNumber',
			message: 'What is the office number?',
			type: 'input'
		}
	],
	[
		{
			name: 'role',
			message: 'Add a new employee?',
			type: 'list',
			choices: ['Engineer', 'Intern', 'do not add any more to your team']
		}
	],
	[
		{
			name: 'gitHub',
			message: 'What is the employees github link?',
			type: 'input'
		}
	],
	[
		{
			name: 'school',
			message: 'What is the name of the employees school?',
			type: 'input'
		}
	]
];

function generateRole() {
	inquirer.prompt(employeeQuestions[2]).then((employeeInfo) => {
		if (employeeInfo.role === 'Engineer') {
			generateQuestions(employeeInfo.role);
		} else if (employeeInfo.role === 'Intern') {
			generateQuestions(employeeInfo.role);
		} else if (employeeInfo.role === 'do not add any more to your team'){
			const htmlFile = generateHTML(employeeList);
			fileSystem.writeFile('./dist/index.html', htmlFile, (err) => {
				console.log(err);
			});
		}
	});
}

function generateQuestions(role) {
	inquirer.prompt(employeeQuestions[0]).then((employeeInfo) => {
		const employee1 = employeeInfo;
		if (role === 'Manager') {
			inquirer.prompt(employeeQuestions[1]).then((employee) => {
				const manager = new Manager(
					employee1.name,
					employee1.id,
					employee1.email,
					employee.officeNumber
				);
				employeeList.push(manager);
				generateRole();
			});
		} else if (role === 'Engineer') {
			inquirer.prompt(employeeQuestions[3]).then((employee) => {
				const engineer = new Engineer(
					employee1.name,
					employee1.id,
					employee1.email,
					employee.gitHub
				);
				employeeList.push(engineer);
				generateRole();
			});
		} else if (role === 'Intern') {
			inquirer.prompt(employeeQuestions[4]).then((employee) => {
				const intern = new Intern(
					employee1.name,
					employee1.id,
					employee1.email,
					employee.school
				);
				employeeList.push(intern);
				generateRole();
			});
		}
	});
}

generateQuestions('Manager');
