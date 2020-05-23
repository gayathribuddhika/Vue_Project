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
            res.status(200).send('Saved Successfully');
        })
        .catch(() => {
            res.status(400).send("Unable to save");
        });
});

/*router.post('/adminlogin', (req, res, next) => {
    Admin.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            //res.json(data);
            res.status(200).send('Record is saved Successfully');
            
        }
    })
});*/

module.exports = router;

