const fs = require("fs");

// Validate file path of new font.
function validateFilePath(path) {
  console.log("Valid!", path);
  // function callback() {

  // }
  const callback = error => {
    if (error == null) {
    }
  };
  fs.stat(path, callback); //CONVERT INTO PROMISE
}

// Inspect file. Find name of font.

// Interrogate font cache: Is this family installed?

// N: Install font.

// Y: Uninstall outdated font.
// Clear cache.
// Prompt restart.

// Copy file into font directory.
function main() {
  const path = process.argv[2];
  validateFilePath(path);
}
main();
