const app = express();

const express = require('express')
const path = require('path')
var stripe = require('stripe')('sk_live_#');
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
