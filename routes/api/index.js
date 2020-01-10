const express = require('express');
const router = express.Router();

const moviesRouter = require('./movies');
const performerRouter = require('./performers');

router.use('/movies', moviesRouter);
router.use('./performers', performerRouter);

module.exports = router;