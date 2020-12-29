const express = require("express")
const router = express.Router()
const cors = require("cors")

const User = require("../models/user_details")
router.use(cors())

router.get('/user', (req, res) => {
    User.find(function (err, user) {
        if (err) {
            res.json(err);
        }
        res.json(user);
    });
});

router.post('/user', function (req, res) {
    let user = new User({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        profile_image: req.body.profile_image
    });
    user.save()
        .then(() => {
            res.status(200).send('Successfully Added');
        })
        .catch(() => {
            res.status(400).send("Unable to save to Database");
        });
});

module.exports = router;