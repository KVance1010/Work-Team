const Employee = require('./Employee');

class Engineer extends Employee {
	constructor(name, id, email, github) {
		super(name, id, email);
		this.github = github;
	}
	get getGitHub() {
		return `https://github.com/${this.github}`;
	}
	get getRole() {
		return 'Engineer';
	}
}

module.exports = Engineer;
