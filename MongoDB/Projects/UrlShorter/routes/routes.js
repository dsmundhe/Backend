const express = require('express');
const { handleUrl } = require('../controller/handleUrl')
const router = express.Router();
const { naviGation } = require('../controller/navigation')

router.post('/', handleUrl);
router.get('/:shortID', naviGation)

module.exports = router;