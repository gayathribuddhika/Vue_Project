const express = require("express")
const router = express.Router()
const cors = require("cors")

const Contact = require("../models/about.model")
router.use(cors())

router.get('/aboutus', (req, res) => {
    Contact.find(function (err, departments) {
        if (err) {
            res.json(err);
        }
        res.json(departments);
    });
});

module.exports = router;

