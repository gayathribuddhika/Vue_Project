const express = require('express');
const router = express.Router();

// Stock model
const Store = require("../models/stock_details");

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
      res.json(data)
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
       res.json(data)
       console.log('Stores successfully updated!')
     }
   })
 })
 

router.route('/delete-store/:id').delete((req, res, next) => {
    Store.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })
  
  module.exports = router;