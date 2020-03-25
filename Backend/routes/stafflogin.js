const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const url = 'mongodb://localhost:27017/Inventory_FAS';

router.get('/', async(req, res) => {
    const stafflogin = await loadStaffLogincollection();
    res.send(await stafflogin.find({}).toArray());
});

async function loadStaffLogincollection() {
    const client = await mongodb.MongoClient.connect (url, { useNewUrlParser: true, useUnifiedTopology: true });
    return client.db('Inventory_FAS').collection("Staff_Login")
}

module.exports = router;