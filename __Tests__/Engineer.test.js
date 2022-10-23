const engineerTest = require('../lib/Engineer.js');

describe('Engineer Test', () => {
	test('create a new engineer and test the different values', () => {
		const engineer = new engineerTest("Robert Smith", 1,"cure@gmail.com", "Berkeley");
        expect(engineer.getName).toEqual("Robert Smith");
        expect(engineer.getEmail).toEqual('"mailto: cure@gmail.com"');
        expect(engineer.getId).toEqual(1);
        expect(engineer.getGitHub).toEqual("https://github.com/Berkeley"); 
        expect(engineer.getRole).toEqual("Engineer"); 
	});
});