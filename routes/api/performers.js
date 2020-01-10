const express = require('express');
const router = express.Router();

const performersApiCtrl = require('../../controllers/performersApiCtrl');

router.get('/', performersApiCtrl.index);

router.post('/', performersApiCtrl.create);

router.get('/:id', performersApiCtrl.show);

router.put('/:id', performersApiCtrl.update);

router.delete('/:id', performersApiCtrl.delete);

module.exports = router;