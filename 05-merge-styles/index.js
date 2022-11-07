const fs = require('fs');
const path = require('path');
const streamWrite = fs.createWriteStream(
  path.join(path.join(__dirname, 'project-dist'), 'bundle.css')
);

fs.readdir(
  path.join(__dirname, 'styles'),
  { withFileTypes: true },
  (error, files) => {
    if (error) {
      throw error;
    } else {
      files.forEach((element) => {
        if (element.isFile() && path.extname(element.name) === '.css') {
          const stream = fs.createReadStream(
            path.join(path.join(__dirname, 'styles'), element.name)
          );
          stream.pipe(streamWrite);
        }
      });
    }
  }
);
