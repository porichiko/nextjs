// vix.js
const yahooFinance = require('yahoo-finance2').default;

const getStocksData = async (req, res) => {
    try {
        // Apple 데이터 가져오기
        const appleData = await yahooFinance.quote("AAPL");
        const apple = {
            symbol: appleData.symbol,
            price: appleData.regularMarketPrice,
            change: appleData.regularMarketChangePercent,
        };

        // VIX 데이터 가져오기
        const vixData = await yahooFinance.quote("^VIX");
        const vix = {
            symbol: vixData.symbol,
            price: vixData.regularMarketPrice,
            change: vixData.regularMarketChangePercent,
        };

        res.status(200).json({ apple, vix });
    } catch (err) {
        console.error("데이터 로드 중 오류:", err);
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getStocksData };