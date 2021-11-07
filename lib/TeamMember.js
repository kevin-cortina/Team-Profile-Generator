const inquirer = require('inquirer');

const Engineer = require('./Engineer')
const Intern = require('./Intern');
const Manager = require('./Manager');
const writeFile = require('../src/generate-site')
const generatePage = require('../src/template')


class TeamMember {
    constructor () {
        this.teamMember;
        this.profile = [];
    }

    //manager prompt
getManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message:"What is the manager's name?",
        },
        {
            type: 'number',
            name:'id',
            message: "What is the manager's ID?",
        },
        {
            type:'input',
            name:'email',
            message:"What is the manager's email?",
        },
        {
            type:'number',
            name:'officeNumber',
            message:"What is manager's office number?",
        },
        //moves inputs and generates card with this data.
    ]).then(({ name, id, email, officeNumber}) => {
        this.teamMember = new Manager(name, id, email, officeNumber);
        this.profile.push(this.teamMember);
        this.profile.push(this.teamMember.getRole());
        writeFile(generatePage(this.profile));
        this.getMembers();
    });
};

//team members prompt
async getMembers() {
    inquirer.prompt([ 
        //confirming whether more team members should be added
        {
            type: 'confirm',
            name:'confirmOptions',
            message:"Would you like to add more employees?",
            default: true
        },     
        {
            type:'list',
            name:'options',
            message:"Which employee would you like to add?",
            choices: ['Engineer', 'Intern'],
            when: ({confirmOptions}) => confirmOptions
        },
        //desiganting the questions if engineer was chosen
    ]) .then (({options}) => {
        if (options === 'Engineer') {
            inquirer.prompt([ 
            {
                type:'input',
                name:'name',
                message:"What is the engineer's name?",
            },
            {
                type: 'number',
                name:'id',
                message: "What is enginner's ID?",
            },
            {
                type:'input',
                name:'email',
                message:"What is the enginner's email?",
            },
            {
                type:'input',
                name:'gitHub',
                message:"What is the engineer's github username?",
            },    
        ]) .then (({ name, id, email, gitHub}) => {
            this.teamMember = new Engineer(name, id, email, gitHub);
            this.profile.push(this.teamMember);
            this.profile.push(this.teamMember.getRole());
            writeFile(generatePage(this.profile));
            this.getMembers();
        });
        //designating quesitons if intern is chosen
    } else if (options === 'Intern') {
        inquirer.prompt([ 
            {
                type:'input',
                name:'name',
                message:"What is the intern's name?",
            },
            {
                type: 'number',
                name:'id',
                message: "What is itern's ID?",
            },
            {
                type:'input',
                name:'email',
                message:"What is the itern's email?",
            },
            {
                type:'input',
                name:'schoolName',
                message:"What school does the intern's attend?",
            },    
        ]) .then (({ name, id, email, schoolName}) => {
            this.teamMember = new Intern(name, id, email, schoolName);
            this.profile.push(this.teamMember);
            this.profile.push(this.teamMember.getRole());
            writeFile(generatePage(this.profile));
            this.getMembers();
        });
    } else {
        return console.log(this.profile);
    }
});
}
}

module.exports = TeamMember;
