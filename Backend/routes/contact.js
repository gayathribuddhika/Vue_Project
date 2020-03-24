const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const url = 'mongodb://localhost:27017/Inventory_FAS';

//get posts

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

router.get('/', async (req, res) => {
    try {
        const contact = await Contact.find()
        res.json(contact)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
  });
*/
router.get('/', async(req, res) => {
    const contacts = await loadContactscollection();
    res.send(await contacts.find({}).toArray());
});

async function loadContactscollection() {
    const client = await mongodb.MongoClient.connect (url, { useNewUrlParser: true, useUnifiedTopology: true });
    return client.db('Inventory_FAS').collection("Contact_Information")
}

module.exports = router;