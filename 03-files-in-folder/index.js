const fs = require('fs');
const path = require('path');
const secretFolder = path.join(__dirname, 'secret-folder');

fs.readdir(secretFolder, { withFileTypes: true }, (err, files) => {
  if (err) throw err;

  files.forEach((element) => {
    if (element.isFile()) {
      fs.stat(path.join(secretFolder, element.name), (error, stats) => {
        if (error) {
          throw err;
        } else {
          console.log(
            `${element.name.split('.').join(' - ')} - ${stats.size}b`
          );
        }
      });
    }
  });
});
