const express = require('express');
const router = express.Router();
const cors = require("cors")

const Store = require("../models/stock_details");
router.use(cors())

router.route('/store').get((req, res) => {
    Store.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/create-store').post((req, res, next) => {
    Store.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).send('Record is saved Successfully');
        }
    })
});

router.route('/edit-store/:id').get((req, res) => {
    Store.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


router.route('/update-store/:id').post((req, res, next) => {
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


router.route('/delete-store/:id').delete((req, res, next) => {
    Store.findByIdAndRemove(req.params.id, (error) => {
        if (error) {
            return next(error);
        } else {
            res.send('Successfully removed');
        }
    });
});


module.exports = router;