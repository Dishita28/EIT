//append
var fs = require('fs');

fs.appendFile('demo1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// open 
var fs = require('fs');

fs.open('demo1.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

//write file
var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

//delete
var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});

//rename
var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
