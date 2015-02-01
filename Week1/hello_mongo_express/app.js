/**
 * Created by alexgavrilov939 on 02.02.15.
 */
var express = require('express'),
    app = express(),
    cons = require('consolidate'),
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + "/views");

var mongoClient = new MongoClient(new Server('localhost', 27017), {'native_parser' : true});

var db = mongoClient.db('demo');


app.get('/', function (req, res) {
    db.collection('things').findOne({}, function (err, doc) {
        res.render('hello', {'name' : doc});
    });
});
app.get('*', function (req, res) {
    res.send("Page not found", 404);
});

var port = 8082;

mongoClient.open(function (err, mongoClient) {
    if (err) throw err;

    app.listen(port);
    console.log('Express server started at localhost:' + port);
});
