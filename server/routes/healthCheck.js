const express = require('express');
const { checkHealth } = require('../controllers/healthCheckController');

const router = express.Router();

// 서버 상태 확인 API
router.get('/', checkHealth);

module.exports = router;
