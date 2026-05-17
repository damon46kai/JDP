// 保留你原来的全部逻辑，只修复错误
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

// 关键修复：前端路径正确指向 frontend 文件夹
app.use(express.static(path.join(__dirname, '../frontend')));

// ======================================
// 线上 Render Redis 访问统计（保留你的逻辑）
// ======================================
let redis = null;
let localCount = 0;

// 关闭 Vercel KV 代码（避免报错）
// if (process.env.KV_REST_API_URL) {
//   const { createClient } = require('@vercel/kv');
//   const redis = createClient({
//     url: process.env.KV_REST_API_URL,
//     token: process.env.KV_REST_API_TOKEN
//   });
// }

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

// 首页加载前端
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
  console.log('🚀 服务已启动 on Render');
});