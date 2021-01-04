const express = require('express');
const router = express.Router();
const cors = require("cors")

const Store = require("../models/stock.model");
router.use(cors())

router.get('/stock', (req, res) =>{
    Store.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.post('/create-stock', (req, res, next) => {
    Store.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            //res.json(data);
            res.status(200).send('Record is saved Successfully');
            
        }
    })
});

router.get('/edit-stock/:id', (req, res, next) => {
    Store.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.post('/update-stock/:id', (req, res, next) => {
    Store.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.send("Update Successfully")
            
        }
    });
});

router.delete('/delete-stock/:id', (req, res, next) => {
    Store.findByIdAndDelete(req.params.id, (error) => {
        if (error) {
            return next(error);
        } else {
            res.send('Successfully removed');
        }
    });
});


module.exports = router;