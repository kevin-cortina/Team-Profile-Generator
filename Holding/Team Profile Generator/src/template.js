const profileSection = (data) => {
    let output ='';
    data.forEach(member => {
        if (member.role === 'Manager') {
            output += `
            <div class="card">
            <div class="card-header">
            <h3 class="name"> ${member.name}</h3>
            <h5 class="job-title"><i class="fas fa-mug-hot"></i>${member.role}</h5>
            </div>

            <div class="card-body">
            <ul class="info">
            <li class="card-info card-id"> id: ${member.id}</li>
            <li class="card-info card-email"> Email: <a href="mailto:${member.email}">
                ${member.email}</a>
            </li>
            <li class="card-info card-number">Office Number: ${member.officeNumber}</li>
            </ul>
            </div>
            </div>
            `;
        }
        if (member.role ==='Engineer') {
            output += `
            <div class="card">
            <div class="card-header">
            <h3 class="name"> ${member.name}</h3>
            <h5 class="job-title"><i class="fas fa-glasses"></i>${member.role}</h5>
            </div>

            <div class="card-body">
            <ul class="info">
            <li class="card-info card-id"> id: ${member.id}</li>
            <li class="card-info card-email"> Email: <a href="mailto:${member.email}">
                ${member.email}</a>
            </li>
            <li class="card-info card-github">GitHub: <a href="https://github.com/${member.gitHub}" target="_blank"> ${member.gitHub} </a></li>
            </ul>
            </div>
            </div>
            `;
        }
        if (member.role ==='Intern') {
            output += `
            <div class="card">
            <div class="card-header">
            <h3 class="name"> ${member.name}</h3>
            <h5 class="job-title"><i class="fas fa-mug-hot"></i>${member.role}</h5>
            </div>

            <div class="card-body">
            <ul class="info">
            <li class="card-info card-id"> id: ${member.id}</li>
            <li class="card-info card-email"> Email: <a href="mailto:${member.email}">
                ${member.email}</a>
            </li>
            <li class="card-info card-number">School Name: ${member.schoolName}</li>
            </ul>
            </div>
            </div>
            `;
        }
    });
    return output;
}

const templateData = (data) => {
    const currentYear = new Date().getFullYear();
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="style.css">
    </head>

    <body>
    <div class="container">
    <header class="header">
    <h1 class="title"> My Team </h1>
    </header>
    <div class="row">
        ${profileSection(data)}
    </div>
    </div>
    <script src="https://kit.fontawesome.com/0cb0e7b636.js" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
};

module.exports = templateData;