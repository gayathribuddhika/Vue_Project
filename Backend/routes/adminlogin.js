const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const url = 'mongodb://localhost:27017/Inventory_FAS';

router.get('/', async(req, res) => {
    const adminlogin = await loadAdminLogincollection();
    res.send(await adminlogin.find({}, { projection: { _id: 0, Username: 1} }).toArray());
    
});


async function loadAdminLogincollection() {
    const client = await mongodb.MongoClient.connect (url, { useNewUrlParser: true, useUnifiedTopology: true });
    return client.db('Inventory_FAS').collection("Admin_Login")
}
module.exports = router;

/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Inventory_FAS");
  dbo.collection("Admin_Login").find({}, { projection: { _id: 0, Username: 1} }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});*/