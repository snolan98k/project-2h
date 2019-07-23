const express = require('express')
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static("public"));
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log("Running on PORT: " + PORT);
});