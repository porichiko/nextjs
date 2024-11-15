const express = require('express');
const { getFearGreedIndex } = require('../controllers/fearGreedController');

const router = express.Router();

// Fear and Greed API
router.get('/', getFearGreedIndex);

module.exports = router;
