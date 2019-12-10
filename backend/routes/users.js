var express = require('express');
var router = express.Router();
var User = require('../controllers/users-controllers.js');
var User = require('../models/users-models.js');

// GET all users
router.get('/:getAllusers', User.findAll);

// GET one user
router.get('/:getOneuser', User.findOne);

router.get("/getUser", User.findOne);

// PUT Create one user
router.put('/', User.create);

// POST Update one user
router.post('/:userId', User.update);

// DELETE Delete one user
router.delete('/:userId', User.delete);

module.exports = router;
