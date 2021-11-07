const Intern = require('../lib/Intern');

test('creates object of Intern', () => {
    const intern = new Intern('Alex Wraith', 400, 'AlexW@gmail.com', 'Target High School');

    expect(intern.name).toBe('Alex Wraith');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('AlexW@gmail.com');
    expect(intern.schoolName).toBe('Target High School');

    expect(intern.getRole()).toBe('Intern')
});