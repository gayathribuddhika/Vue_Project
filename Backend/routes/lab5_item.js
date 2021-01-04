const express = require("express")
const router = express.Router()
const cors = require("cors")

const Item = require("../models/lab5_item.model")
router.use(cors())

router.get('/lab5', (req, res) => {
    Item.find(function (err, items) {
        if (err) {
            res.json(err);
        }
        res.json(items);
    });
});

router.get('/lab5/:id', function (req, res) {
    let id = req.params.id;
    Item.findById(id, function (err, item) {
        if (err) {
            res.json(err);
        }
        res.json(item);
    });
});

router.post('/lab5', function (req, res) {
    let item = new Item({
        Select_LAB:req.body.Select_LAB,
        Item_id:req.body.Item_id,
        Main_Category: req.body.Main_Category,
        Asset_Description: req.body.Asset_Description,
        Serial_Num: req.body.Serial_Num,
        Asset_Code: req.body.Asset_Code,
        Qty: req.body.Qty,
        Make: req.body.Make,
        Condition: req.body.Condition,
        Comments: req.body.Comments
    });
    item.save()
        .then(() => {
            res.status(200).send('Record is saved Successfully');
        })
        .catch(() => {
            res.status(400).send("Unable to save to database");
        });
});

router.put('/lab5/update/:id', function (req, res) {
    Item.update({_id: req.params.id}, {
        $set: req.body
    }, function (err, item) {
        if(err) {
            res.json(err);
        }
        res.json(item);
    })
})

router.delete('/lab5/delete/:id', function (req, res) {               //can also use findByIdAndRemove
    Item.findOneAndDelete({ _id: req.params.id }, function (err) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = router;