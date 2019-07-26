
const router = require("express").Router();
const db = require("../models");




router.post("users", (req, res) => {
    // use sequelize to store data into database
    db.Users.create({
        f_name: req.body.f_name,
        email: req.body.email,
        passphrase: req.body.passphrase,
        l_name: req.body.l_name

    }).then(function () {
        res.redirect("/");
    });
});

module.exports = router;