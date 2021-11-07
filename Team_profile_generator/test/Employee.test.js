const Employee = require('../lib/Employee');

test('creates object of employee', () => {
    const employee = new Employee('Jabari Banks', 1, 'JubariB@gmail.com');

    expect(employee.name).toBe('Jabari Banks');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('JubariB@gmail.com');

    expect(employee.getRole()).toBe('Employee')
});