const fs = require('fs');

const writeFile = (data) => {
    return new Promise(() => {
        fs.writeFile('./dist/index.html', data, err => {
        });
    });
};
module.exports = writeFile;
