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

router.post('/lab1', function (req, res, next) {
    MongoClient.connect(url, {
        useNewUrlParser: true
    }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("Inventory_FAS");
        req.body.dateOfEntry = new Date();
        req.body.isDeleted = "false";
        var countRow;
        var sequenceDocument = dbo.collection("LAB01_CIS").findOneAndUpdate({
            _id: "itemid"
        }, {
            $inc: {
                sequence_value: 1
            }
        }, {
            new: true
        });
        dbo.collection("LAB01_CIS").find({
            _id: "itemid"
        }).toArray(function (err, result1) {
            if (err) {
                throw err;
            } else {
                countRow = result1[0].sequence_value;
                req.body["_id"] = countRow;
                dbo.collection("LAB01_CIS").insertOne(req.body, function (err, resDB) {
                    if (err) {
                        throw err;
                        res.status(401);
                        res.send({
                            "status": 401,
                            "message": "Some error happened"
                        });
                    } else {
                        console.log("1 document inserted");
                        res.status(201)
                        res.send({
                            "body": req.body,
                            "status": 201,
                            "message": "visualization has been added"
                        });
                    }
                });
            }
        });
    });
});
async function loadLab1collection() {
    const client = await mongodb.MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    return client.db('Inventory_FAS').collection("LAB01_CIS")
}






module.exports = router;