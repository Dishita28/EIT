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
