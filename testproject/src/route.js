const express = require('express');
const router = express.Router();

const Certy = require("./app");

router 
    .route("/getcert")
    .post(Certy.getCerty)
    .get(Certy.getCerty);

    
 
    
    module.exports = router;