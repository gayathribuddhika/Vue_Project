const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-Parser');
const router = express.Router();
const assert = require('assert');
const url = 'mongodb://localhost:27017/'

//get posts
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

module.exports = router;