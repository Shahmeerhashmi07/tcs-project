var express = require('express');
var router = express.Router();
var  Material =require("../models/material.js")

router.get('/', function(req, res, next) {
    Material.find({}).exec(function(error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});

module.exports = router;
