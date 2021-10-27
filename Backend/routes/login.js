const express = require("express");
const router = express.Router();
const cors = require("cors");
const bcrypt = require("bcrypt");
const {Login, validate} = require("../models/login.model");

router.use(cors())

// router.get('/login', (req, res) => {
//     Login.find(function (err, login) {
//         if (err) {
//             res.json(err);
//         }
//         res.json(login);
//     });
// });

router.post('/login', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let login = await Login.findOne({username: req.body.username});
    if (login) {
        return res.status(400).send("User already registered");
    }
    login = new Login({
        username: req.body.username,
        password: req.body.password
        
    })

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(login.password, salt);
    
    // await user.save()
    //     .then(() => {
    //         res.status(200).send({msg:'User Added Successfully', user});
            
    //     })
})

module.exports = router;