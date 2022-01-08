const express = require("express");
const router = express.Router();
const cors = require("cors");
const bcrypt = require("bcrypt");
const Joi = require("joi");

const { User } = require("../models/user.model");
const config = require("config");

const msg = require('../constants/message');
const code = require('../constants/common');

router.use(cors())

router.post('/login', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(code.STATUS_CODE.BadRequest).send(error.details[0].message);

    let user = await User.findOne({username: req.body.username});
    if (!user) return res.status(code.STATUS_CODE.BadRequest).send(msg.STATUS_MESSAGE.InvalidLogin);
        
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(code.STATUS_CODE.BadRequest).send(msg.STATUS_MESSAGE.InvalidLogin);

    const token = user.generateAuthToken();
    res.header("auth-token", token).json({msg: msg.STATUS_MESSAGE.Succ_Login, user});
    
});

function validate(req){
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().min(5).max(12).required()
    });
    return schema.validate(req);
}

module.exports = router;