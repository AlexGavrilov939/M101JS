/**
 * Created by alexgavrilov939 on 01.02.15.
 */

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/demo', function(err, db) {

    if (err) throw err;

    // Find one document in our collection
    db.collection('things').findOne({}, function(err, doc ) {

        // Print the result
        console.dir(doc);

        // Close the DB
        db.close();
    });

    // Declare success
    console.dir("Called findOne()");
});