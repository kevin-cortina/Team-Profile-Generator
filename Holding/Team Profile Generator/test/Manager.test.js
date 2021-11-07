const Manager = require('../lib/Manager');

test('creates object of engineer', () => {
    const manager = new Manager('Jannet Mcdonald', 2, 'JannetM@gmail.com', 125);

    expect(manager.name).toBe('Jannet Mcdonald');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('JannetM@gmail.com');
    expect(manager.officeNumber).toEqual(expect.any(Number));

    expect(manager.getRole()).toBe('Manager')
});