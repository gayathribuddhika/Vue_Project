//testing page..have to delete later

const express = require("express")
const router = express.Router()
const cors = require("cors")

const Item = require("../models/lab1_item")
router.use(cors())
router.route('/lab1').get((req, res) => {
    Item.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })

 router.route('/create').post((req, res, next) => {
    Item.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

router.route('/edit/:id').get((req, res) => {
    Item.findById(req.params.id, (error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })
 
 // Update student
 router.route('/update/:id').post((req, res, next) => {
   Item.findByIdAndUpdate(req.params.id, {
     $set: req.body
   }, (error, data) => {
     if (error) {
       return next(error);
     } else {
       res.json(data)
       console.log('Student successfully updated!')
     }
   })
 })
 
 // Delete student
router.route('/delete-student/:id').delete((req, res, next) => {
    Item.findByIdAndRemove(req.params.id, (error, data) => {
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