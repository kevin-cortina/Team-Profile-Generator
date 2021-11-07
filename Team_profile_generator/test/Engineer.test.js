const Engineer = require('../lib/Engineer');

test('creates object of engineer', () => {
    const engineer = new Engineer('James', 6, 'James@gmail.com', 'JamesAbignale');

    expect(engineer.name).toBe('James');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('James@gmail.com');
    expect(engineer.github).toBe('JamesAbignale');

    expect(engineer.getRole()).toBe('Engineer')
});