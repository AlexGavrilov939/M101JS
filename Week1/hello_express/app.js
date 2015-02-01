/**
 * Created by alexgavrilov939 on 02.02.15.
 */
var express = require('express'),
    app = express();
app.get('/', function (req, res) {
    res.send("Hello, Express FW!");
});
app.get('*', function (req, res) {
    res.send("Page not found", 404);
});


var port = 8082;
app.listen(port);

console.log('Express server started at localhost:' + port);