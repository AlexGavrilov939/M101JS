/**
 * Created by alexgavrilov939 on 02.02.15.
 */
var express = require('express'),
    app = express(),
    cons = require('consolidate'),
    bodyParser = require('body-parser');

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(bodyParser.raw());

// Handler for internal server errors
function errorHandler (err, req, res, next) {
    console.log(err.message);
    console.log(err.stack);
    res.status(500);
    res.render('error_template', {error : err});
}

app.use(errorHandler);

app.get('/', function (req, res, next) {
    res.render('fruitPicker', {'fruits' : ['apple', 'orange', 'banana', 'peach']});
});

app.post('/favorite_fruit', function (req, res, next) {
    console.log(req.body);
    var favorite = req.body.fruit;
    if (typeof favorite == 'undefined') {
        next(Error('Please, choose a fruit!'));
    } else {
        res.send('Your favorite fruit is ' + favorite);
    }
});

var port = 8084;
app.listen(port);

console.log('Express server listening on port ' + port);