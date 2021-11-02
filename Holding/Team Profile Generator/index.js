const inquirer = require('inquirer');
const fs = require('fs');
// const Employee = require('./_tests_/Employee.test');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the employee?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the ID of the employee?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the email of the employee?',
    },
    {
      type: 'confirm',
      name: 'confirmation',
      message: 'Would you like to add another employee? (Y/N)',
    },
    {
      type: 'checkbox',
      name: 'otherClasses',
      message: 'Which type of employee would you like to add?',
      choices: ['Engineer', 'Manager', 'Intern',]
    },
  ]);


};

const generateHTML = ({ name, id, email, confirmation, otherClasses}) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

const init = () => {
  promptUser()
    .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();
