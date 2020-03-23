const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const url = 'mongodb://localhost:27017/Inventory_FAS';

router.get('/', async(req, res) => {
    const records = await loadRecordscollection();
    res.send(await records.find({}).toArray());
});

router.post('/', async (req, res) => {
    const records = await loadRecordscollection();
    await records.insertOne({
        Id: req.body.id,
        Main_Category: req.body.category,
        Asset_Description: req.body.description,
        Asset_Code: req.body.code,
        Qty: req.body.qty,
        Make: req.body.make,
        Condition: req.body.condition,
        Comments: req.body.comment
    });
    
    res.status(201).send();
});





async function loadRecordscollection() {
    const client = await mongodb.MongoClient.connect (url, { useNewUrlParser: true, useUnifiedTopology: true });
    return client.db('Inventory_FAS').collection("CIS/LAB/01")
}





module.exports = router;