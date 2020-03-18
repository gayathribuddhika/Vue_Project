const express = require('express');
const router = express.Router();
const contact = require('../models/contact_details');
const url = 'mongodb://localhost:27017/'

/*//get posts
router.get('/', (req, res) => {
    res.send("Hello Contacts");
});

/*
router.get('/', function (req, res, next) {
    mongoose.connect(url,{useUnifiedTopology: true, useNewUrlParser: true }, function (err, db) {
        assert.equal(null, err);
        var curser = db.collection('Contact_Information').find();
        curser.forEach (function (doc, err) {
            assert (null, err);
        })
    })
})
*/
router.get('/', async (req, res) => {
    try {
        const contact = await contact.find()
        res.json(contact)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
  });


module.exports = router;