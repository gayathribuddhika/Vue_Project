const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const url = 'mongodb://localhost:27017/Inventory_FAS';

router.get('/', async(req, res) => {
    const contacts = await loadContactscollection();
    res.send(await contacts.find({}).toArray());
});

async function loadContactscollection() {
    const client = await mongodb.MongoClient.connect (url, { useNewUrlParser: true, useUnifiedTopology: true });
    return client.db('Inventory_FAS').collection("Contact_Information")
}

module.exports = router;

/*var Contact = require('../models/contact.model');
var express = require('express');
var router = express.Router();

router.route('/').get((req, res) => {
    Contact.find((err, contacts) =>{
      if(err){
        console.log(err);
      }
      else {
        res.json(contacts);
      }
    });
  });

router.route('/todos/:id').get((req, res) => {
    var id = req.params.id;
    Todo.findById(id, (err, todo) =>{
        res.json(todo);
    });
});

  module.exports = router;*/