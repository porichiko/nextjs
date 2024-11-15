// vix.js
const express = require('express');
const { getStocksData } = require('../controllers/vixController');

const router = express.Router();

// Stocks API
router.get('/', getStocksData);

module.exports = router;