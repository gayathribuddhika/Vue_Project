const mongoose = require('mongoose');
const Joi = require("joi");
// const { json } = require('body-parser');
// const Schema = mongoose.Schema;

const User = mongoose.model("User", new mongoose.Schema({
    
    // profile_image: {
    //     type: String,
    //     // data: Buffer.from(encImg, 'base64')
    //     required: true
    // },

    name: {
        type: String,
        required: true
    },

    designation: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required: true,
        minlength: 10
    },
    
    email: {
        type: String,
        reruired: true,
        unique: true,
        minlength: 5,
        maxlength: 255
    }
}, {collection: "User"}
));

function validateUser(user){
    const schema = Joi.object({
        // profile_image: Joi.String().required(),
        name: Joi.string() .required(),
        designation: Joi.string() .required(),
        phone: Joi.number().min(10) .required(),
        email: Joi.string().min(5).max(255) .required()
    });
    return schema.validate(user);
}

exports.User = User;
exports.validate = validateUser;
