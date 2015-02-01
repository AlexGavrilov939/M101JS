/**
 * Created by alexgavrilov939 on 02.02.15.
 */
var express = require('express'),
    app = express(),
    cons = require('consolidate');

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// Handler for internal server errors
function errorHandler (err, req, res, next) {
    console.log(err.message);
    console.log(err.stack);
    res.status(500);
    res.render('error_template', {error : err});
}

app.use(errorHandler);

// var called name
app.get('/:name', function (req, res, next) {
    var name = req.params.name;
    var getvar1 = req.query.getvar1 ? req.query.getvar1 : 'getvar1';
    var getvar2 = req.query.getvar2 ? req.query.getvar2 : 'getvar2';
    console.log('getvar1 is ' + getvar1);
    console.log('getvar2 is ' + getvar2);
    res.render('hello', {name : name, getvar1 : getvar1, getvar2 : getvar2 });
});

var port = 3000;
app.listen(port);

console.log('Express server listening on port ' + port);