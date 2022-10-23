const internTest = require('../lib/intern.js');

describe('Intern Test', () => {
	test('create a new intern and test the different values', () => {
		const intern = new internTest("Robert Smith", 1,"cure@gmail.com", "Berkeley");
        expect(intern.getName).toEqual("Robert Smith");
        expect(intern.getEmail).toEqual('"mailto: cure@gmail.com"');
        expect(intern.getId).toEqual(1);
        expect(intern.getSchool).toEqual("Berkeley"); 
	});
});