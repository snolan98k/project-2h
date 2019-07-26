const express = require('express');
const app = express();
const router = require("./routes/api-route");
const db = require("./models");

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static("public"));
app.use(router);
const PORT = process.env.PORT || 3000;



app.listen(PORT, function () {
    console.log("Running on PORT: " + PORT);
});
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});