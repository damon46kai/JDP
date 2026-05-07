require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// 连接 MongoDB（本地，你Compass直接用）
mongoose.connect('mongodb://localhost:27017/pegboard')
  .then(() => console.log('✅ MongoDB 本地连接成功'))
  .catch(err => console.error('❌ MongoDB 连接失败', err));

// ---------------- 访问统计 Schema ----------------
const VisitSchema = new mongoose.Schema({
  page: String,
  count: { type: Number, default: 0 },
});

const Visit = mongoose.model('Visit', VisitSchema);

// ---------------- API ----------------

// 1. 访问 +1
app.get('/api/visit', async (req, res) => {
  let visit = await Visit.findOne({ page: 'home' });
  
  if (!visit) {
    visit = await Visit.create({ page: 'home', count: 1 });
  } else {
    visit.count += 1;
    await visit.save();
  }

  res.json({ total: visit.count });
});

// 2. 获取数量
app.get('/api/count', async (req, res) => {
  const visit = await Visit.findOne({ page: 'home' });
  res.json({ total: visit ? visit.count : 0 });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});