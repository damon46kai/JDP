const mongoose = require('mongoose');

const toolSchema = new mongoose.Schema({
  name: String,         // 工具名
  url: String,          // 链接
  category: String,     // 分类：开发 / 设计 / 效率 / AI
  desc: String,         // 描述
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Tool', toolSchema);