const express = require('express');
const router = express.Router();

const moviesApiCtrl = require('../../controllers/moviesApiCtrl');

router.get('/', moviesApiCtrl.index);

router.post('/', moviesApiCtrl.create);

router.get('/:id', moviesApiCtrl.show);

router.put('/:id', moviesApiCtrl.update);

router.delete('/:id', moviesApiCtrl.delete);

module.exports = router;