const express = require("express");
const { getFedFundsRate  } = require("../controllers/interestRateController");

const router = express.Router();

// 10년물 금리 API 엔드포인트
router.get("/", getFedFundsRate );

module.exports = router;
