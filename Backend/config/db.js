const mongoose = require('mongoose')

/*const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/'

//connect to database
MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
    if(err){
        return console.log("Error in DB Connection");
    }
    else{
        console.log("Mongodb is Connected");
    }
    
       
});*/

mongoose.connect("mongodb://localhost:27017/Inventory_FAS", { useUnifiedTopology: true, useNewUrlParser: true }).then(
    () => { console.log('DB Connected Successfully') },
    err => { console.log('Error in DB Connection' + err) }
);


