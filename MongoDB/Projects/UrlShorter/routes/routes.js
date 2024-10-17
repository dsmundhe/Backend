const express = require('express');
const { handleUrl } = require('../controller/handleUrl')
const router = express.Router();
const { naviGation } = require('../controller/navigation')

router.post('/create', handleUrl);
router.get('/navigation', naviGation)

module.exports = router;