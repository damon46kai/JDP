// 完全干净的 Render 后端代码
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 10000;

// 允许跨域
app.use(cors());
app.use(express.json());

// 简单访问计数（Render 完美运行）
let visitCount = 0;

// 增加访问量接口
app.get('/api/visit', (req, res) => {
  visitCount++;
  res.json({ total: visitCount });
});

// 仅获取数量
app.get('/api/count', (req, res) => {
  res.json({ total: visitCount });
});

// 启动服务
app.listen(PORT, () => {
  console.log('✅ 后端服务运行成功 on port', PORT);
});