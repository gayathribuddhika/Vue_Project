const express = require("express")
const router = express.Router()
const cors = require("cors")

const Contact = require("../models/contact.model")
router.use(cors())

router.get('/', (req, res) => {
    Contact.find(function (err, contacts) {
        if (err) {
            res.json(err);
        }
        res.json(contacts);
    });
});

module.exports = router;

