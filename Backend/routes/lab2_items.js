const express = require("express")
const router = express.Router()
const cors = require("cors")

const Item = require("../models/lab2_item")
router.use(cors())

router.get('/lab2', (req, res) => {
    Item.find(function (err, items) {
        if (err) {
            res.json(err);
        }
        res.json(items);
    });
});

router.get('/lab2/:id', function (req, res) {
    let id = req.params.id;
    Item.findById(id, function (err, item) {
        if (err) {
            res.json(err);
        }
        res.json(item);
    });
});

/*router.post('/lab2', function (req, res) {
    let item = new Item(req.body);
    item.save()
        .then(() => {
            res.status(200).send('Record is saved Successfully');
        })
        .catch(() => {
            res.status(400).send("Unable to save to database");
        });
});*/

router.post('/lab2', function (req, res) {
    let item = new Item({
        Select_LAB:req.body.Select_LAB,
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

router.delete('/lab2/delete/:id', function (req, res) {
    Item.findOneAndDelete({ _id: req.params.id }, function (err) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});



module.exports = router;
