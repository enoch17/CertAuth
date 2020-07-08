const express = require('express');
const router = express.Router();

const Certy = require("./app");

router 
    .route("/getcert")
    .get(Certy.getCerty);

    module.exports = router;