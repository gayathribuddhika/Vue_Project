const express = require('express');

const app= express ();

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'
const dbName = 'Inventory_FAS';

MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
    if(err){
        return console.log("error present");
    }
    console.log("Mongodb Connected");
    db.close();
});

const port = 8085;
app.listen(port, () => {
    console.log('server started on port ' + port);
});