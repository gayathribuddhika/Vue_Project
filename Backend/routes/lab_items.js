const express = require("express");
const router = express.Router();
const cors = require("cors");

const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const msg = require("../constants/message");
const code = require("../constants/common"); 

const {Item, validate} = require("../models/lab_item.model");
router.use(cors());

router.get('/lab1', async (req, res) => {
    try {
        const item = await Item.find();
        res.send(item);
    } catch (ex) {
        res.status(code.STATUS_CODE.InternalServerError).send(msg.STATUS_MESSAGE.InternalServerError);
    }
    
});

router.get('/lab1/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        res.send(item);
    } catch (ex) {
        res.status(code.STATUS_CODE.InternalServerError).send(msg.STATUS_MESSAGE.InternalServerError);
    }
    
});

router.post('/lab1', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(code.STATUS_CODE.BadRequest).send(error.details[0].message);

    let item = await Item.findOne({Serial_Num: req.body.Serial_Num});
    if (item) {
        return res.status(code.STATUS_CODE.BadRequest).send(msg.STATUS_MESSAGE.ExistItem);
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
            res.status(code.STATUS_CODE.Success).send(msg.STATUS_MESSAGE.Succ_add);
        })
});

router.delete('/lab1/delete/:id', [auth, admin], async (req, res) => {       //can also use findByIdAndRemove
    try {
        await Item.findOneAndDelete({ _id: req.params.id });
        res.status(code.STATUS_CODE.Success).send("Item Deleted Successfully..");
    } catch (ex) {
        res.status(code.STATUS_CODE.InternalServerError).send(ex.message);
    }
});

router.put('/lab1/update/:id',[auth, admin], async (req, res) => {
    await Item.updateOne({_id: req.params.id}, { $set: req.body }, function (err, item) {
        if(err) {
            res.json(err);
        }
        res.json(item);
    })
})

module.exports = router;