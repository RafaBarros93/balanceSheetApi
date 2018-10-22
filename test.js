var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  fs.readFile('balancete_ideal.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/txt'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
