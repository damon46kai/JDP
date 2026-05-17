// 本地开发纯净版（数据库已注释，可直接运行）
const express = require('express');
const cors = require('cors');

// 本地端口
const PORT = 3000;
const app = express();

// 基础中间件
app.use(cors());
app.use(express.static('public'));

// ===================== 数据库相关已全部注释 =====================
// const mongoose = require('mongoose');
//
// // 本地 MongoDB 连接
// mongoose.connect('mongodb://localhost:27017/pegboard')
//   .then(() => console.log('✅ MongoDB 本地连接成功'))
//   .catch(err => console.error('❌ MongoDB 连接失败', err));
//
// // 访问统计 Schema
// const VisitSchema = new mongoose.Schema({
//   page: String,
//   count: type: Number, default: 0 },
// });
// const Visit = mongoose.model('Visit', VisitSchema);
// =================================================================

// 临时内存计数（重启服务器会清零，适合本地调试）
let tempCount = 0;

// ---------------- API ----------------

// 首页测试
app.get('/', (req, res) => {
  res.send('✅ 本地服务器启动成功！http://localhost:3000');
});

// 访问 +1
app.get('/api/visit', (req, res) => {
  tempCount += 1;
  res.json({ total: tempCount });
});

// 获取数量
app.get('/api/count', (req, res) => {
  res.json({ total: tempCount });
});

// 启动服务
app.listen(PORT, () => {
  console.log(`🚀 本地服务器运行在：http://localhost:${PORT}`);
});