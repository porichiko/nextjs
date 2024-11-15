// interestRate.js
const express = require('express');
const { getInterestRateData } = require('../controllers/interestRateController');

const router = express.Router();

// Interest Rate API
router.get('/api/interest-rate', getInterestRateData);

module.exports = router;