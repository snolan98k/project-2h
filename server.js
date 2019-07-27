const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const apiRoutes = require("./routes/api-route");
const db = require("./models");
// setup middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(apiRoutes);
app.use(express.static("public"));
//app.use(calendar);
//the force statement is to be used to the data base does not get wiped everytime this code runs
db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT,
        () => console.log(`http://localhost:${PORT}`));
});
