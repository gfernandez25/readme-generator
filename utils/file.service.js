const fs = require('fs');

write = function (data) {
    fs.writeFile('README.md', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

module.exports = {
    write
};