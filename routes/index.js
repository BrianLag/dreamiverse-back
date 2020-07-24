const express = require('express');
const users = require('./user')
const library = require('./database')

const router = express.Router();

router.use('/', users);
router.use('/', library)

module.exports = router;