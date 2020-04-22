/*const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const cors = require('cors')
const url = 'mongodb://localhost:27017/Inventory_FAS';
const Item = require('../models/item.model')

router.get('lab1',(req, res) => {
    Item.find((err, items) =>{
      if(err){
        console.log(err);
      }
      else {
        res.json(items);
      }
    });
  });

module.exports = router;*/