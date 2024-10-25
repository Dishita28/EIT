var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  fs.readFile('demo.html', function(err, data) {
    res.write(data);
    return res.end();
  });
}).listen(3000);
