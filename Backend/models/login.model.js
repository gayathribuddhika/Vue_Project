const mongoose = require('mongoose');
const Joi = require("joi");

const login = mongoose.model("Login", new mongoose.Schema({
    
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

    // user_type: {
    //     type: String,
    //     required: true
    // }

}));

function validateLogin(login){
    const schema = {
        username: Joi.String().required(),
        password: Joi.String().min(5).max(12).required()
    };
    return Joi.validate(login, user);
}

exports.Login = Login;
exports.validate = validateLogin;