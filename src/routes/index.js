const express = require('express');

const router = express.Router();

router.use('/', require('./link'));

module.exports = router;
