const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const url = 'mongodb://localhost:27017/';
const MongoClient = require('mongodb').MongoClient;
//const Item = require("../models/item.model")

router.get('/lab1', async (req, res) => {
    const lab1 = await loadLab1collection();
    res.send(await lab1.find({}).toArray());
});

router.post('/lab1', async (req, res) => {
    const items = await getNextSequence();
    res.send(await items.find({_id:"itemid"}).toArray( function(err,result1) {
        if(err) {
            throw err;
        }else {
            countRow = result1[0].sequence_value;
            req.body["_id"] = countRow;
            "Inventory_FAS".collection("LAB01_CIS").insertOne(req.body);
        }
    }));
});


async function loadLab1collection() {
    const client = await mongodb.MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    return client.db('Inventory_FAS').collection("LAB01_CIS")
}
 async function getNextSequence() {
     MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err,db){
         if (err) throw err;
         var dbo = db.db("Inventory_FAS");
     var sequenceDocument = dbo.collection("LAB01_CIS").findOneAndUpdate({
        _id: "itemid"
    }, {
        $inc: { sequence_value: 1},
        new: true
    }, {
        new: true
    });
    return sequenceDocument.sequence_value;
 })
     }
     





module.exports = router;