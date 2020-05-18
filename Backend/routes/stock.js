const express = require('express');
const router = express.Router();
const cors = require("cors")

const Store = require("../models/stock_details");
router.use(cors())

router.get('/store', (req, res) =>{
    Store.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.post('/create-store', (req, res, next) => {
    Store.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            //res.json(data);
            res.status(200).send('Record is saved Successfully');
            
        }
    })
});

router.get('/edit-store/:id', (req, res, next) => {
    Store.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


router.post('/update-store/:id', (req, res, next) => {
    Store.findOneAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.send("Update Successfully")
            
        }
    });
});


router.delete('/delete-store/:id', (req, res, next) => {
    Store.findOneAndRemove(req.params.id, (error) => {
        if (error) {
            return next(error);
        } else {
            res.send('Successfully removed');
        }
    });
});


module.exports = router;