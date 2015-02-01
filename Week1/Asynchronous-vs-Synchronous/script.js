/**
 * Created by alexgavrilov939 on 01.02.15.
 */
//Find one document on our collection

var doc  = db.things.findOne();

// Print the result
printjson(doc);
