/**
 * Created by alexgavrilov939 on 01.02.15.
 */
var http = require('http'); // built-in library

var server = http.createServer(function (request, response) {
    response.writeHead(404, {"Content-Type" : "text/plain"});
    response.end("Hello, World\n");
});

var port = 8000;
server.listen(port);

console.log('Server running at http://localhost:' + port);