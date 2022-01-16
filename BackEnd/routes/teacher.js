var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var Class = require('../models/class');
var Assignment = require('../models/assignment');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/addassign', function(req, res, next) {
  Assignment.create(req.body)
      .then((assignment) => {
          console.log('Assignment has been Added ', assignment);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(result);
      }, (err) => next(err))
      .catch((err) => next(err));
});

router.get('/assign', function(req, res, next) {
    Assignment.find().sort('question').exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
  });
  router.get('/assign/:id', function(req, res, next) {
    Assignment.findById(req.params.id)
        .then((assignment) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(assignment);
        }, (err) => next(err))
        .catch((err) => next(err));
  
  });


module.exports = router;
