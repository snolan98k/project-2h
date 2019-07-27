
const router = require("express").Router();
const db = require("../models");

module.exports = router;



router.post("/", (req, res) => {
    // use sequelize to store data into database
    db.users.create({
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        email: req.body.email,
        passphrase: req.body.passphrase        

    }).then(function () {
        res.redirect("./home.html");
    });
});

