const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const url = 'mongodb://localhost:27017/Inventory_FAS';

router.get('/', async(req, res) => {
    const records = await loadRecordscollection();
    res.send(await records.find({}).toArray());
});

/*router.post('/', async (req, res) => {
    const records = await loadRecordscollection();
    await records.insertOne ({
        text: req.body.text,
    });
    res.status(201).send();
});*/

router.post('/', (req, res) => {
    insertRecord (req, res);
});

async function loadRecordscollection() {
    const client = await mongodb.MongoClient.connect (url, { useNewUrlParser: true, useUnifiedTopology: true });
    return client.db('Inventory_FAS').collection("CIS/LAB/01")
}

function insertRecord(req, res) {
    const record = new record();
    record.Id = req.body.Id;
    record.Main_Category = req.body.Main_Category;
    record.Asset_Description = req.body.Asset_Description;
    record.Asset_Code = req.body.Asset_Code;
    record.Qty = req.body.Qty;
    record.Make = req.body.Make;
    record.Condition = req.body.Condition;
    record.Comments = req.body.Comments;
    record.save((err, doc) => {
        if(!err)
            res.redirect('/adminpanel/list');
        else {
            console.log('Error during record insertion : ' + err);
        }
    });
}

router.get('/list', (req, res) => {
    res.json("from list");
});

module.exports = router;