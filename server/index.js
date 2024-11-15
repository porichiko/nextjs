// server/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// 미들웨어 설정
app.use(cors());
app.use(express.json());

// 라우트 설정
const fearGreedRoute = require('./routes/fearGreed');
const healthCheckRoute = require('./routes/healthCheck');
const vixRoute = require('./routes/vix');
const interestRateRoute = require('./routes/interestRate'); // 추가된 부분

app.use('/api/fear-greed', fearGreedRoute);
app.use('/api/health', healthCheckRoute);
app.use('/api/vix', vixRoute);
app.use(interestRateRoute); // 추가된 부분

// 서버 실행
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다`);
});