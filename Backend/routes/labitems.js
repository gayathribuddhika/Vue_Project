const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const url = 'mongodb://localhost:27017/Inventory_FAS';
var Item = require('../models/item.model')

router.get('/lab1', async (req, res) => {
    const lab1 = await loadLab1collection();
    res.send(await lab1.find({}).toArray());
});

router.get('/lab1/:id', async (req, res) => {
    const lab1 = await loadLab1collection();
    res.send(await lab1.find({ _id: new mongodb.ObjectID(req.params.id) }).toArray());
});

router.get('/lab2', async (req, res) => {
    const lab2 = await loadLab2collection();
    res.send(await lab2.find({}).toArray());
});

/*router.get('/lab3', async(req, res) => {
    const lab3 = await loadLab3collection();
    res.send(await lab3.find({}).toArray());
});*/

router.post('/lab1', async (req, res) => {
    const lab1 = await loadLab1collection();
    await lab1.insertOne({
        Id: req.body.id,
        Main_Category: req.body.Main_Category,
        Asset_Description: req.body.Asset_Description,
        Serial_Num: req.body.Serial_Num,
        Asset_Code: req.body.Asset_Code,
        Qty: req.body.Qty,
        Make: req.body.Make,
        Condition: req.body.Condition,
        Comments: req.body.Comments
    });
    res.status(201).send();
});
/*router.post('/lab2', async (req, res) => {
    const lab2 = await loadLab2collection();
    await lab2.insertOne({
        Id: req.body.id,
        Main_Category: req.body.Main_Category,
        Asset_Description: req.body.Asset_Description,
        Serial_Num: req.body.Serial_Num,
        Asset_Code: req.body.Asset_Code,
        Qty: req.body.Qty,
        Make: req.body.Make,
        Condition: req.body.Condition,
        Comments: req.body.Comments
    });
    
    res.status(201).send();
});
router.post('/lab3', async (req, res) => {
    const lab3 = await loadLab3collection();
    await lab3.insertOne({
        Id: req.body.id,
        Main_Category: req.body.Main_Category,
        Asset_Description: req.body.Asset_Description,
        Serial_Num: req.body.Serial_Num,
        Asset_Code: req.body.Asset_Code,
        Qty: req.body.Qty,
        Make: req.body.Make,
        Condition: req.body.Condition,
        Comments: req.body.Comments
    });
    
    res.status(201).send();
});*/

router.delete('/lab1/:id', async (req, res) => {
    const lab1 = await loadLab1collection();
    await lab1.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
    res.status(200).send();


});
router.get('/lab1/edit/:id', async function (req, res) {
    const lab1 = await loadLab1collection();
    await lab1.findOne({ _id: new mongodb.ObjectID(req.params.id) }, function (err, item) {
        if (err) {
            res.json(err);
        }
        res.json(item);
    });
});

router.put('/lab1/update/:id', async function (req, res) {
    const lab1 = await loadLab1collection();
    await lab1.findOneAndUpdate({ _id: new mongodb.ObjectID(req.params.id) }, function (err, item) {
        if (!item)
            res.status(404).send("Not found");
        else {
            item.Id = req.body.id;
            item.Main_Category = req.body.Main_Category;
            item.Asset_Description = req.body.Asset_Description;
            item.Serial_Num = req.body.Serial_Num;
            item.Asset_Code = req.body.Asset_Code;
            item.Qty = req.body.Qty;
            item.Make = req.body.Make;
            item.Condition = req.body.Condition;
            item.Comments = req.body.Comments;

            res.json(item);
        }

    })
        
});

async function loadLab1collection() {
    const client = await mongodb.MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    return client.db('Inventory_FAS').collection("LAB01_CIS")
}
async function loadLab2collection() {
    const client = await mongodb.MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    return client.db('Inventory_FAS').collection("LAB02_CIS")
}
async function loadLab3collection() {
    const client = await mongodb.MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    return client.db('Inventory_FAS').collection("LAB03_CIS")
}

module.exports = router;
