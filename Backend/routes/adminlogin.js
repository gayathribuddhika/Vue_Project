const express = require("express")
const router = express.Router()
const cors = require("cors")

const Admin = require("../models/admin_details")
router.use(cors())

router.get('/adminlogin', (req, res) => {
    Admin.find(function (err, admin) {
        if (err) {
            res.json(err);
        }
        res.json(admin);
    });
});

router.post('/adminlogin', function (req, res) {
    let admin = new Admin({
        Username: req.body.Username,
        Password: req.body.Password
    });
    admin.save()
        .then(() => {
            res.status(200).send('Successfully Login');
        })
        .catch(() => {
            res.status(400).send("Unable to Login");
        });
});

module.exports = router;

