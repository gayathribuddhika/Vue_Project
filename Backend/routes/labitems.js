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

router.get('/delete/:id').get(function (req, res) {
    LAB01_CIS.findByidAndRemove({_id: req.params.id}, (err, doc) => {
        if(!err){
            res.redirect("/currentstatus");
        } else {
            console.log('Error in record delete : ' + err)
        }
    });
});

/*router.delete('/lab1/:id', function(req, res, next) {
    //console.log(req.params.id);

    res.send({type:DELETE});
})*/

async function loadLab1collection() {
    const client = await mongodb.MongoClient.connect (url, { useNewUrlParser: true, useUnifiedTopology: true });
    return client.db('Inventory_FAS').collection("LAB01_CIS")
}
async function loadLab2collection() {
    const client = await mongodb.MongoClient.connect (url, { useNewUrlParser: true, useUnifiedTopology: true });
    return client.db('Inventory_FAS').collection("LAB02_CIS")
}
async function loadLab3collection() {
    const client = await mongodb.MongoClient.connect (url, { useNewUrlParser: true, useUnifiedTopology: true });
    return client.db('Inventory_FAS').collection("LAB03_CIS")
}





module.exports = router;