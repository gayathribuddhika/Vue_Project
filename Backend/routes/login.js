const express = require("express");
const router = express.Router();
const cors = require("cors");
const bcrypt = require("bcrypt");
const Joi = require("joi");

const {User} = require("../models/user.model");
const config = require("config");

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

    let user = await User.findOne({username: req.body.username});
    if (!user) return res.status(400).send("Invalid username or Password");
    
    
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send("Invalid username or Password");

    const token = user.generateAuthToken();
    res.header("auth-token", token).json({msg:'User Login Successfully', status: "OK", isAdmin: user.isAdmin});
    
});

function validate(req){
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().min(5).max(12).required()
    });
    return schema.validate(req);
}

module.exports = router;