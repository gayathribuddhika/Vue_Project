const mongoose = require('mongoose');
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    
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
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    isAdmin: {
        type: Boolean,
        required: true
    }
});

userSchema.methods.generateAuthToken = function () {
    // const token = jwt.sign({_id: this._id}, config.get("jwtPrivateKey"));
    const token = jwt.sign({_id: this._id}, "jwtPrivateKey");
    return token;
}

const User = mongoose.model("User", userSchema);

function validateUser(user){
    const schema = Joi.object({
        // profile_image: Joi.String().required(),
        name: Joi.string() .required(),
        designation: Joi.string() .required(),
        phone: Joi.number().min(10) .required(),
        email: Joi.string().min(5).max(255) .required(),
        username: Joi.string().required(),
        password: Joi.string().min(5).max(12).required(),
        isAdmin: Joi.boolean().required()
    });
    return schema.validate(user);
}

exports.User = User;
exports.validate = validateUser;
