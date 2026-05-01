require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Tool = require('./models/Tool');

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// 连接 MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB 连接成功'))
  .catch(err => console.error('❌ MongoDB 连接失败', err));

// ---------------- API ----------------
// 获取所有工具
app.get('/api/tools', async (req, res) => {
  const tools = await Tool.find().sort({ createdAt: -1 });
  res.json(tools);
});

// 添加工具
app.post('/api/tools', async (req, res) => {
  const tool = await Tool.create(req.body);
  res.json(tool);
});

// 删除工具
app.delete('/api/tools/:id', async (req, res) => {
  await Tool.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

// 更新工具
app.put('/api/tools/:id', async (req, res) => {
  const tool = await Tool.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(tool);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});