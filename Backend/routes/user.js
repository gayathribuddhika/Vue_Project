const express = require("express")
const router = express.Router()
const cors = require("cors")
const bcrypt = require("bcrypt");

const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const msg = require("../constants/message");
const code = require("../constants/common"); 

const {User, validate} = require("../models/user.model")
router.use(cors())

const upload = require("../middleware/upload")

router.get('/me', auth, async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id).select("-password");
        res.send(user);
    } catch (ex) {
        next(ex);
    }
    
});


router.post('/user', async(req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(code.STATUS_CODE.BadRequest).json(error.details[0].message);

    let user = await User.findOne({email: req.body.email});
    if (user) {
        return res.status(code.STATUS_CODE.BadRequest).send("User already registered");
    }
    
    user = await User.findOne({username: req.body.username});
    if (user) {
        return res.status(code.STATUS_CODE.BadRequest).send(msg.STATUS_MESSAGE.ExistUsername);
    }

    user = new User({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        username: req.body.username,
        password: req.body.password,
        isAdmin: req.body.isAdmin
    })

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    // if(req.file) {
    //     user.profile_image = req.file.path
    // }
    await user.save()
        .then(() => {
            const token = user.generateAuthToken();
            res.header("auth-token", token).json({msg:'User Added Successfully', status: "OK"});
        })
})

module.exports = router;