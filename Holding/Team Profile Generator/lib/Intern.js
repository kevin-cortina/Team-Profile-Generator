const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, schoolName) {
        super (name, id, email);
        this.schoolName = schoolName;
    }
    getSchool() {
        return this.schoolName;
    }
    getRole() {
        return this.role = 'Intern';
    }

}
module.exports = Intern;