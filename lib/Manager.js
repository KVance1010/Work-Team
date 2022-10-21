const Employee = require('./Employee');

class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		super(name, id, email);
		this.officeNumber = officeNumber;
		super.getName();
		super.getId();
		super.getEmail();
		this.getOfficeNumber = () => {
			return this.officeNumber;
		};
		this.getRole = () => {
			return 'Manager';
		};
	}
}

module.exports = Manager;
