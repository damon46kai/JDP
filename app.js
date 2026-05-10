const express = require('express');
const cors = require('cors');
const { Redis } = require('@upstash/redis');

const app = express();
app.use(cors());

const redis = Redis.fromEnv();

// 直接返回页面！不用找文件夹！
app.get('/', (req, res) => {
  res.send(`
    <h1>✅ 项目运行成功！</h1>
    <p>你的前端页面已经出来了！</p>
  `);
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
app.listen(PORT);