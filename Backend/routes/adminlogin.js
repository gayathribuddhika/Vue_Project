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
        username: req.body.username,
        password: req.body.password
    });
    admin.save()
        .then(() => {
            res.status(200).send('Saved Successfully');
        })
        .catch(() => {
            res.status(400).send("Unable to save");
        });
});

module.exports = router;