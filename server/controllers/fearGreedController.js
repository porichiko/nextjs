const puppeteer = require('puppeteer');

const getFearGreedIndex = async (req, res) => {
    try {
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });

        const page = await browser.newPage();
        await page.goto('https://edition.cnn.com/markets/fear-and-greed', {
            waitUntil: 'networkidle2',
            timeout: 60000,
        });

        const indexValue = await page.evaluate(() => {
            const element = document.querySelector('span.market-fng-gauge__dial-number-value');
            return element ? element.innerText.trim() : null;
        });

        await browser.close();

        if (!indexValue) {
            throw new Error('Fear and Greed Index 값을 찾을 수 없습니다.');
        }

        res.json({ fearGreedIndex: indexValue });
    } catch (error) {
        console.error('스크래핑 오류:', error.message);
        res.status(500).json({ error: '스크래핑 실패', message: error.message });
    }
};

module.exports = { getFearGreedIndex };
