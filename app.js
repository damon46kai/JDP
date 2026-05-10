const express = require('express');
const cors = require('cors');
const { Redis } = require('@upstash/redis');

const app = express();
app.use(cors());
app.use(express.static('public'));

const redis = Redis.fromEnv();

app.get('/', (req, res) => {
  res.send('✅ 我终于跑起来啦！');
});

app.get('/api/visit', async (req, res) => {
  const count = await redis.incr('visit_count');
  res.json({ total: count });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);