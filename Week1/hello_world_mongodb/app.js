/**
 * Created by alexgavrilov939 on 02.02.15.
 */

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost/demo', function(err, db) {
    if (err) throw err;

    db.collection('things').findOne({}, function(err, doc) {
        console.log(doc);
        db.close();
    });

    console.log('findOne() used');
});