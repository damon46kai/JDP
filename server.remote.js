require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// ======================================
// 线上 Render Redis 访问统计
// ======================================
let redis = null;
let localCount = 0;

if (process.env.RENDER_REDIS_URL) {
  const Redis = require('ioredis');
  redis = new Redis(process.env.RENDER_REDIS_URL);
  console.log('✅ 线上 Redis 连接成功');
}

// 增加访问量
async function addVisit() {
  if (redis) return await redis.incr('visit_count');
  localCount++;
  return localCount;
}

// 获取访问量
async function getCount() {
  if (redis) return await redis.get('visit_count') || 0;
  return localCount;
}

// API 接口
app.get('/api/visit', async (req, res) => {
  try {
    const total = await addVisit();
    res.json({ total: Number(total) });
  } catch (err) {
    res.status(500).json({ error: '服务器错误' });
  }
});

app.get('/api/count', async (req, res) => {
  try {
    const total = await getCount();
    res.json({ total: Number(total) });
  } catch (err) {
    res.json({ total: 0 });
  }
});

app.listen(PORT, () => {
  console.log('🚀 线上服务已启动');
});