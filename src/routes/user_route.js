const express = require('express');
const router = express.Router();
const { UserController } = require('../controllers');

router.get('/findAll', UserController.findAll);


module.exports = router;