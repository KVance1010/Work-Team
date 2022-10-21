const Employee = require('./Employee');

class Intern extends Employee {
	constructor(name, id, email, school) {
		super(name, id, email);
		this.school = school;
		super.getName();
		super.getId();
		super.getEmail();
		this.getSchool = () => {
			return this.github;
		};
		this.getRole = () => {
			return 'Intern';
		};
	}
}

module.exports = Intern;
