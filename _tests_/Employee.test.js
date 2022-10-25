const EmployeeTest = require('../lib/Employee');

describe('Employee Test', () => {
	test('create a new employee and test the different values', () => {
		const employee = new EmployeeTest("Robert Smith", 1, "867-5309");
        expect(employee.getName).toEqual("Robert Smith");
        expect(employee.getEmail).toEqual('"mailto: 867-5309"');
        expect(employee.getId).toEqual(1);
        expect(employee.getRole).toEqual("Employee");
	});
});
