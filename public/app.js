const toolWall = document.getElementById('toolWall');

// 加载所有工具
async function loadTools() {
  const res = await fetch('/api/tools');
  const tools = await res.json();
  renderTools(tools);
}

// 渲染工具墙
function renderTools(tools) {
  toolWall.innerHTML = '';
  tools.forEach(tool => {
    const div = document.createElement('div');
    div.className = 'tool-card';
    div.innerHTML = `
      <h3>${tool.name}</h3>
      <a href="${tool.url}" target="_blank">${tool.url}</a>
      <div class="category">${tool.category || '未分类'}</div>
      <p>${tool.desc || ''}</p>
      <div class="actions">
        <button onclick="deleteTool('${tool._id}')">Delete</button>
      </div>
    `;
    toolWall.appendChild(div);
  });
}

// 添加工具
async function addTool() {
  const name = document.getElementById('name').value;
  const url = document.getElementById('url').value;
  const category = document.getElementById('category').value;
  const desc = document.getElementById('desc').value;

  await fetch('/api/tools', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, url, category, desc })
  });

  // 清空表单
  document.querySelectorAll('.form-card input, textarea').forEach(i => i.value = '');
  loadTools();
}

// 删除工具
async function deleteTool(id) {
  await fetch(`/api/tools/${id}`, { method: 'DELETE' });
  loadTools();
}

// 初始化
loadTools();