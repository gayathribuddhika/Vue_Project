const express = require("express");
// const Joi = require("joi");
const router = express.Router();
const cors = require("cors");
const admin = require("../middleware/admin")

const {Item, validate} = require("../models/lab_item.model");
router.use(cors());

router.get('/lab1', (req, res) => {
    Item.find(function (err, items) {
        if (err) {
            res.json(err);
        }
        res.json(items);
    });
});

// router.get('/lab1/:id', function (req, res) {
//     let id = req.params.id;
//     Lab1.findById(id, function (err, item) {
//         if (err) {
//             res.json(err);
//         }
//         console.log(item);
//         res.json(item);
//     });
// });

router.post('/lab1', admin, async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let item = await Item.findOne({Serial_Num: req.body.Serial_Num});
    if (item) {
        return res.status(400).send("The Item already Added..");
    }
    item = new Item({
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
            res.status(200).send('item Added Successfully...');
        })
});

router.delete('/lab1/delete/:id', function (req, res) {               //can also use findByIdAndRemove
    Item.findOneAndDelete({ _id: req.params.id }, function (err) {
        if (err) res.json(err);
        else res.json('Successfully Deleted');
    });
});

router.put('/lab1/update/:id', function (req, res) {
    Item.updateOne({_id: req.params.id}, {
        $set: req.body
    }, function (err, item) {
        if(err) {
            res.json(err);
        }
        res.json(item);
    })
})

module.exports = router;