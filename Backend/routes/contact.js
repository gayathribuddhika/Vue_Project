const express = require("express")
const router = express.Router()
const cors = require("cors")

const Contact = require("../models/contact.model")
router.use(cors())

router.get('/contact', async (req, res, next) => {
    try {
        const contact = await Contact.find();
        res.status(200).send(contact);
    } catch (ex) {
        next(ex);
    }
});

module.exports = router;

