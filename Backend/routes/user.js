const express = require("express")
const router = express.Router()
const cors = require("cors")

const User = require("../models/user.model")
router.use(cors())

const upload = require("../middleware/upload")

router.get('/user', (req, res) => {
    User.find({}, function (err, user) {
        if (err) {
            res.json(err);
        }
        res.json(user);
    });
});

router.get('/user/admin', (req, res) => {
    User.findOne({username: "Admin"}, function (err, user) {
        if (err) {
            res.json(err);
        }
        res.json(user);
    });
});

router.get('/user/staff', (req, res) => {
    User.findOne({username: "staff"}, function (err, user) {
        if (err) {
            res.json(err);
        }
        res.json(user);
    });
});

router.get('/user/:id', function (req, res) {
    let id = req.params.id;
    User.findById(id, function (err, user) {
        if (err) {
            res.json(err);
        }
        res.json(user);
        // let user1 = new User ({
        //     name: user.name,
        //     email: user.email
        // })
        // res.json(user1);
    });
});

router.post('/user',upload.single("profile_image"), function (req, res) {
    let user = new User({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        // position: req.body.position
    })
    if(req.file) {
        user.profile_image = req.file.path
    }
    user.save()
        .then(() => {
            res.status(200).send('User Added Successfully');
        })
        .catch(() => {
            res.status(400).send("Unable to save to Database");
        });
});

module.exports = router;