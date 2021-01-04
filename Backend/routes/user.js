const express = require("express")
const router = express.Router()
const cors = require("cors")

const User = require("../models/user.model")
router.use(cors())

const upload = require("../middleware/upload")

router.get('/user', (req, res) => {
    User.findOne({position: "admin"}, function (err, user) {
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
    });
});

router.post('/user',upload.single("profile_image"), function (req, res) {
    let user = new User({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
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