const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/'

//connect to database
MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
    if(err){
        return console.log("Error in DB Connection");
    }
    else{
        console.log("Mongodb Connected");
    }
    
       
});