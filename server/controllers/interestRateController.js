// interestRateController.js
const yahooFinance = require('yahoo-finance2').default;

const getInterestRateData = async (req, res) => {
    try {
        // ^IRX 데이터 가져오기 (13주 국채 수익률)
        const irxData = await yahooFinance.quote("^IRX");
        const interestRate = {
            symbol: irxData.symbol,
            rate: irxData.regularMarketPrice, // 현재 금리 (단위: %)
            change: irxData.regularMarketChangePercent, // 변동률
        };

        res.status(200).json({ interestRate });
    } catch (err) {
        console.error("금리 데이터 로드 중 오류:", err);
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getInterestRateData };