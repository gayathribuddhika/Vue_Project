const express = require("express")
const router = express.Router()
const cors = require("cors")

const Admin = require("../models/admin_details")
router.use(cors())

router.get('/adminlogin', (req, res) => {
    Admin.find(function (err, admin) {
        if (err) {
            res.json(err);
        }
        res.json(admin);
    });
});

router.post('/adminlogin', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    
    Admin.findOne({username:username, password:password}, function(err, admin) {
        if(err){
            console.log(err);
            return res.status(500).send();
        }
        if(!admin){
            return res.status(400).send("Invalid username or password");
        }
        return res.status(200).send("Login Successfull");
    })
    
});

module.exports = router;