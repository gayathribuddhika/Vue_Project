const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const url = 'mongodb://localhost:27017/Inventory_FAS';


router.get('/lab1', async(req, res) => {
    const lab1 = await loadLab1collection();
    res.send(await lab1.find({}).toArray());
});

router.get('/lab2', async(req, res) => {
    const lab2 = await loadLab2collection();
    res.send(await lab2.find({}).toArray());
});

router.get('/lab3', async(req, res) => {
    const lab3 = await loadLab3collection();
    res.send(await lab3.find({}).toArray());
});

router.post('/lab1', async (req, res) => {
    const lab1 = await loadLab1collection();
    await lab1.insertOne({
        Id: req.body.id,
        Main_Category: req.body.Main_Category,
        Asset_Description: req.body.Asset_Description,
        Asset_Code: req.body.Asset_Code,
        Qty: req.body.Qty,
        Make: req.body.Make,
        Condition: req.body.Condition,
        Comments: req.body.Comments
    });
    
    res.status(201).send();
});
router.post('/lab2', async (req, res) => {
    const lab2 = await loadLab2collection();
    await lab2.insertOne({
        Id: req.body.id,
        Main_Category: req.body.Main_Category,
        Asset_Description: req.body.Asset_Description,
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
        Asset_Code: req.body.Asset_Code,
        Qty: req.body.Qty,
        Make: req.body.Make,
        Condition: req.body.Condition,
        Comments: req.body.Comments
    });
    
    res.status(201).send();
});

router.get('delete/:id', (req, res) => {
    LAB01_CIS.findByidAndRemove(req.params.id, (err, doc) => {
        if(!err){
            res.redirect("/adminpanel/currentstatus");
        } else {
            console.log('Error in record delete : ' + err)
        }
    });
});
/*
  var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://localhost:27017/";

MongoClient.connect(uri, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Inventory_FAS");
    var myquery = { Asset_Description: 'ACs' };
    dbo.collection("LAB01_CIS").deleteOne(myquery, function(err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      db.close();
    });
  });
 */ 

async function loadLab1collection() {
    const client = await mongodb.MongoClient.connect (url, { useNewUrlParser: true, useUnifiedTopology: true });
    return client.db('Inventory_FAS').collection("LAB01_CIS")
}
async function loadLab2collection() {
    const client = await mongodb.MongoClient.connect (url, { useNewUrlParser: true, useUnifiedTopology: true });
    return client.db('Inventory_FAS').collection("CIS/LAB/02")
}
async function loadLab3collection() {
    const client = await mongodb.MongoClient.connect (url, { useNewUrlParser: true, useUnifiedTopology: true });
    return client.db('Inventory_FAS').collection("CIS/LAB/03")
}





module.exports = router;