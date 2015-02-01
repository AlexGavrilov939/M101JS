/**
 * Created by alexgavrilov939 on 02.02.15.
 */
var express = require('express'),
    app = express(),
    cons = require('consolidate');

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + "/views");

app.get('/', function (req, res) {
    res.render('hello', {'name' : 'Swig'});
});
app.get('*', function (req, res) {
    res.send("Page not found", 404);
});


var port = 8082;
app.listen(port);

console.log('Express server started at localhost:' + port);