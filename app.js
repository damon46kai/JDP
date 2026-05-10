const express = require('express');
const cors = require('cors');
const { Redis } = require('@upstash/redis');
const path = require('path');

const app = express();
app.use(cors());

// 🔥 关键代码：托管前端页面（能看到UI）
app.use(express.static(path.join(__dirname, 'public')));

const redis = Redis.fromEnv();

// 首页自动返回 index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 访问量接口
app.get('/api/visit', async (req, res) => {
  try {
    const count = await redis.incr('visit_count');
    res.json({ total: count });
  } catch (e) {
    res.json({ total: 0 });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('✅ 服务已启动');
});