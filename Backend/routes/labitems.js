const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const url = 'mongodb://localhost:27017/Inventory_FAS';
//var Item = require('../models/item.model')

router.get('/lab1', async (req, res) => {
    const lab1 = await loadLab1collection();
    res.send(await lab1.find({}).toArray());
});

/*router.get('lab1', (req, res)=> {
    Item.findById({_id:id}).toArray();
    res.send("OK");
});*/

/*router.get('/lab1/:id', async (req, res) => {
    const lab1 = await loadLab1collection();
    res.send(await lab1.find({ _id: new mongodb.ObjectID(req.params.id) }).toArray());
});*/

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
        Select_Lab: req.body.Select_Lab,
        //Id: req.body.id,
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
    await lab1.deleteOne({ _id: new mongodb.ObjectID(req.params.id) }, function (err, item) {
        if (err) {
            res.json(err);
        }
        res.status(200).send({ message: "Deleted Successfully" });
    });

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

/*router.put('/lab1/update/:id', async function (req, res) {
    const lab1 = await loadLab1collection();
    await lab1.findOne({ _id: new mongodb.ObjectID(req.params.id) }, {
        Select_Lab: req.body.Select_Lab,
        Id: req.body.id,
        Main_Category: req.body.Main_Category,
        Asset_Description: req.body.Asset_Description,
        Serial_Num: req.body.Serial_Num,
        Asset_Code: req.body.Asset_Code,
        Qty: req.body.Qty,
        Make: req.body.Make,
        Condition: req.body.Condition,
        Comments: req.body.Comments,

    }, { new: true })
        .then(item => {
            if (!item) {
                return res.status(404).send({
                    message: "Item Not Found"
                })
            }
            res.send(item);
        }).catch(err => {
            return res.status(500).send({
                message: "Something went wrong"
            });
        });
});*/

/*router.put('/lab1/update/:id', async (req, res) => {
    const lab1 = await loadLab1collection();
    await lab1.findOne({ _id: new mongodb.ObjectID(req.params.id) }, function (err, item) {
        if (!item) {
            return res.status(404).send('Item Not Found');
        } else if (err) {
            return res.status(400).send("Error in Update");
        } else {
            item.Select_Lab = req.body.Select_Lab;
            item.Id = req.body.id;
            item.Main_Category = req.body.Main_Category;
            item.Asset_Description = req.body.Asset_Description;
            item.Serial_Num = req.body.Serial_Num;
            item.Asset_Code = req.body.Asset_Code;
            item.Qty = req.body.Qty;
            item.Make = req.body.Make;
            item.Condition = req.body.Condition;
            item.Comments = req.body.Comments;
        }
        //res.status(200).json('Updated Successfully');
        //res.json(item);
    })
});*/

router.put('/lab1/update/:id', async function(req, res, next) {
    const lab1 = await loadLab1collection();
    await lab1.findOne({ _id: new mongodb.ObjectID(req.params.id) }, req.body, function (err, item) {
      if (err) return next(err);
      res.json(item);
    });
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
