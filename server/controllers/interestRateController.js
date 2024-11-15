const getFedFundsRate = async (req, res) => {
    try {
        // 동적으로 node-fetch import
        const fetch = (await import('node-fetch')).default;

        const apiKey = '45fa33fc0a4a45a22eca61744cfecb85';
        const url = `https://api.stlouisfed.org/fred/series/observations?series_id=FEDFUNDS&api_key=${apiKey}&file_type=json`;

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("FRED API 요청 실패");
        }

        const data = await response.json();
        const latestObservation = data.observations[data.observations.length - 1];
        const interestRate = {
            date: latestObservation.date,
            rate: parseFloat(latestObservation.value),
        };

        res.status(200).json({ interestRate });
    } catch (err) {
        console.error("데이터 로드 중 오류:", err.message);
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getFedFundsRate };
