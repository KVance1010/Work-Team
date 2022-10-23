const managerTest = require('../lib/Manager.js');

describe('Manager Test', () => {
	test('create a new manager and test the different values', () => {
		const manager = new managerTest("Robert Smith", 1,"cure@gmail.com", "867-5309");
        expect(manager.getName).toEqual("Robert Smith");
        expect(manager.getEmail).toEqual('"mailto: cure@gmail.com"');
        expect(manager.getOfficeNumber).toEqual("867-5309");
        expect(manager.getId).toEqual(1);
        expect(manager.getRole).toEqual("Manager");
	});
});