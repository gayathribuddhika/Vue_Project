const express = require("express")
const router = express.Router()
const cors = require("cors")

const {Login, validate} = require("../models/login.model");
// const mongoose = require("mongoose");
router.use(cors())

router.get('/login', (req, res) => {
    Login.find(function (err, login) {
        if (err) {
            res.json(err);
        }
        res.json(login);
    });
});

router.post('/login', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
})

// router.post('/login', function (req, res) {
//     let newLogin = new Login();
//     newLogin.username = req.body.username;
//     newLogin.password = req.body.password;
    
//     Login.find(newLogin, function(err, login) {
//         if (err) {
//             return res.status(500).send();
//         }
//         if(!login){
//             return res.status(400).send("Invalid Login Details");
//         }
//         let loginDetail = {
//             isLoggedIn: true, 
//             isAdmin: true,
//             username: newLogin.username, 
//             // password: newLogin.password,
//             // status: "Login Successfull"
//         };
//         // console.log(loginDetail);
//         return res.status(200).send(loginDetail);
//     })
// }) 

module.exports = router;