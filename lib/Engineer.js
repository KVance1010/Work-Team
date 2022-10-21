const Employee = require('./Employee');

class Engineer extends Employee {
	constructor(name, id, email, github) {
		super(name, id, email);
		this.github = github;
		super.getName();
		super.getId();
		super.getEmail();
		this.getGithub = () => {
			return this.github;
		};
		this.getRole = () => {
			return 'Engineer';
		};
	}
}

module.exports = Engineer;
