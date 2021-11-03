const inquirer = require('inquirer');
const fs = require('fs');
// const Employee = require('./_tests_/Employee.test');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the manager?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the ID of the manager?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the email of the manager?',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is the office number of the manager?',
    },
  ])
  .then(() => confirmEmployee())
};

const confirmEmployee = () => {
  return inquirer.prompt([
      {
        type: 'confirm',
        name: 'confirmation',
        message: 'Did you want to add another employee?',
      }
    ])
       .then((answers) => {
          if (answers.confirmation === true) {
            employeeAddition();
          } else {
            fs.writeFileSync('index.html', generateHTML(answers))
          }
        })
      };

    const employeeAddition = () => {
    return inquirer.prompt([
      {
        type: 'list',
        name: 'otherClasses',
        message: 'Which kind of an employee would you like to add?',
        choices: ['Engineer', 'Intern'],
      },
    ])
    .then((answers) => {
      if (answers.otherClasses === 'Intern') {
        promptUserIntern();
      } else if (answers.otherClasses === "Engineer") {
        promptUserEngineer();
      }
    })
  };

const promptUserIntern = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the Intern?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the ID of the Intern?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the email of the Intern?',
    },
    {
      type: 'input',
      name: 'internSchool',
      message: 'What school does the intern attend?',
    },
  ])
  .then(() => confirmEmployee());
};

const promptUserEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the Engineer?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the ID of the Engineer?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the email of the Engineer?',
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'What is their github username?',
    },
  ])
  .then(() => confirmEmployee());
};

const generateHTML = ({}) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  
</div>
</body>
</html>`;

const init = () => {
  promptUser()
    // .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
    // .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();

