const fs = require('fs');
const path = require('path');

function copyDir() {
  fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, (error) => {
    if (error) throw error;
  });

  fs.readdir(
    path.join(__dirname, 'files-copy'),
    { withFileTypes: true },
    (error, files) => {
      if (error) {
        throw error;
      } else {
        files.forEach((element) => {
          fs.unlink(
            path.join(path.join(__dirname, 'files-copy'), element.name),
            function (error) {
              if (error) console.log(error.message);
            }
          );
        });
      }

      fs.readdir(
        path.join(__dirname, 'files'),
        { withFileTypes: true },
        (error, files) => {
          if (error) {
            throw error;
          } else {
            files.forEach((element) => {
              if (element.isFile()) {
                fs.copyFile(
                  path.join(path.join(__dirname, 'files'), element.name),
                  path.join(path.join(__dirname, 'files-copy'), element.name),
                  function (error) {
                    if (error) console.log(error.message);
                  }
                );
              }
            });
          }
        }
      );
    }
  );
}

copyDir();
