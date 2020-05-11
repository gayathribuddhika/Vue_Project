const express = require("express")
const router = express.Router()
const cors = require("cors")
const url = "mongodb://localhost:27017/"
const MongoClient = require('mongodb').MongoClient;

const Item = require("../models/lab3_item")
router.use(cors())

router.get('/lab3', (req, res) => {
    Item.find(function (err, items) {
        if (err) {
            res.json(err);
        }
        res.json(items);
    });
});

router.get('/lab3/:id', function (req, res) {
    let id = req.params.id;
    Item.findById(id, function (err, item) {
        if (err) {
            res.json(err);
        }
        res.json(item);
    });
});

/*router.post('/lab3', function (req, res) {
    let item = new Item(req.body);
    item.save()
        .then(() => {
            res.status(200).send('Record is saved Successfully');
        })
        .catch(() => {
            res.status(400).send("Unable to save to database");
        });
});*/

router.post('/lab3', function (req, res) {
    let item = new Item({
        Select_LAB:req.body.Select_LAB,
        Main_Category: req.body.Main_Category,
        Asset_Description: req.body.Asset_Description,
        Serial_Num: req.body.Serial_Num,
        Asset_Code: req.body.Asset_Code,
        Qty: req.body.Qty,
        Make: req.body.Make,
        Condition: req.body.Condition,
        Comments: req.body.Comments,
        
    });
    item.save()
        .then(() => {
            res.status(200).send('Record is saved Successfully');
        })
        .catch(() => {
            res.status(400).send("Unable to save to database");
        });
});

router.delete('/lab3/delete/:id', function (req, res) {
    Item.findOneAndDelete({ _id: req.params.id }, function (err) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

/*router.get('/lab3/edit/:id', function (req, res) {
    let id = req.params.id;
    Item.findById(id, function (err, item) {
        if (err) {
            res.json(err);
        }
        res.json(item);
    });
});

router.post('/lab3/update/:id', function (req, res) {
    Item.findById(req.params.id, function (err, item) {
        if (!item)
            res.status(404).send("Record is not found");
        else {
            item.Select_LAB = req.body.Select_LAB;
            item.Main_Category = req.body.Main_Category;
            item.Asset_Description = req.body.Asset_Description;
            item.Serial_Num = req.body.Serial_Num;
            item.Asset_Code = req.body.Asset_Code;
            item.Qty = req.body.Qty;
            item.Make = req.body.Make;
            item.Condition = req.body.Condition;
            item.Comments = req.body.Comments;
            item.save().then(() => {
                res.json('Update is Completed');
            })
                .catch(() => {
                    res.status(400).send("Unable to update the DB");
                });
        }
    });
});*/

module.exports = router;
