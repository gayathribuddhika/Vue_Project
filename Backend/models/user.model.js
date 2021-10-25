const mongoose = require('mongoose');
const Joi = require("joi");
// const Schema = mongoose.Schema;

const User = mongoose.model("User", new mongoose.Schema({
    
    profile_image: {
        type: String,
        // data: Buffer.from(encImg, 'base64')
        required:[true,"Profile_image is required"]
    },

    name: {
        type: String,
        required:[true,"Name is required"]
    },

    designation: {
        type: String,
        required:[true,"Name is required"]
    },

    phone: {
        type: Number,
        required:[true,"Name is required"]
    },
    
    email: {
        type: String,
        reruired: [true, "Email is required"]
    }
}));

function validateUser(user){
    const schema = {
        username: Joi.String().required(),
        password: Joi.String().min(5).max(12).required()
    };
    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
