const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    profile_image: {
        type: String,
        // required:[true,"Profile_image is required"]
    },

    name: {
        type: String,
        // required:[true,"Name is required"]
    },

    designation: {
        type: String,
        // required:[true,"Name is required"]
    },

    phone: {
        type: Number,
        // required:[true,"Name is required"]
    },
    
    email: {
        type: String,
        // reruired: [true, "Email is required"]
    }
}, 
    {collection: "User"}
);

module.exports = mongoose.model("User", userSchema);
