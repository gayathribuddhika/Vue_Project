const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/'
//const dbName = 'Inventory_FAS';

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
    if(err){
        return console.log("error present");
    }
    else{
        console.log("Mongodb Connected");
    }
    
    if (err) throw err;
    var dbo = db.db('Inventory_FAS');
    dbo.collection("Contact_Information").findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result.Address);
        db.close();
    });
    /*var cursor = db.collection('Contact_Information').find();
    cursor.each(function(err, doc) {
        console.log(doc);

    });*/
});