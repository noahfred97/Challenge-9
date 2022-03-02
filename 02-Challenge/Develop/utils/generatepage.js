const fs = require('fs');

// // TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Check your ./dist folder for your new README!'
            });
        });
    });
};

module.exports = writeToFile;