const mongoose = require('mongoose');
// const passwordComplexity = require("joi-password-complexity");
const Joi = require("joi");

const Login = mongoose.model("Login", new mongoose.Schema({
    
    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 12,
    },          
}));

function validateLogin(login){
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().min(5).max(12).required()
    });
    return schema.validate(login);
}

exports.Login = Login;
exports.validate = validateLogin;