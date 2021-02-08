const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loginSchema = new Schema({
    
    username: {
        type: String,
    },

    password: {
        type: String,
    },

    user_type: {
        type: String,
    }

}, 
    {collection: "Login"}
);

module.exports = mongoose.model("Login", loginSchema);


// const express = require("express")
// const router = express.Router()
// const cors = require("cors")

// const Login = require("../models/login.model")
// router.use(cors())

// router.get('/login', (req, res) => {
//     Login.find(function (err, login) {
//         if (err) {
//             res.json(err);
//         }
//         res.json(login);
//     });
// });

// // router.get('/login/:id', function (req, res) {
// //     let id = req.params.id;
// //     Login.findById(id, function (err, login) {
// //         if (err) {
// //             res.json(err);
// //         }
// //         res.json(login);
// //     });
// // });

// router.post('/login', function (req, res) {
//     var username = req.body.username;
//     var password = req.body.password;
//     // var user_type = req.body.user_type;
    
//     Login.findOne({username:username, password:password}, function(err, login) {
//         if (err) {
//             return res.status(500).send();
//         }
//         if(!login){
//             return res.status(400).send("Invalid Login Details");
//         }
//         return res.status(200).send("Login Successfull");
//     })
// })

// module.exports = router;