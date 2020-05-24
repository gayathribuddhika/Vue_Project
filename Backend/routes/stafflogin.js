const express = require("express")
const router = express.Router()
const cors = require("cors")

const Staff = require("../models/staff_details")
router.use(cors())

router.get('/stafflogin', (req, res) => {
    Staff.find(function (err, staff) {
        if (err) {
            res.json(err);
        }
        res.json(staff);
    });
});

router.post('/stafflogin', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    
    Staff.findOne({username:username, password:password}, function(err, staff) {
        if(err){
            console.log(err);
            return res.status(500).send();
        }
        if(!staff){
            return res.status(404).send("User not Found");
        }
        return res.status(200).send("Login Successfull");
    })
    
});

module.exports = router;

