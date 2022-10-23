class Employee {
	constructor(name, id, email) {
		this.name = name;
		this.id = id;
		this.email = email;
	}
	get getName(){
		return this.name;
	}
	get getId(){
		return this.id;
	}
	get getEmail(){
		return `"mailto: ${this.email}"`
	} 
	get getRole(){
		return 'Employee';
	}
}

module.exports = Employee;
