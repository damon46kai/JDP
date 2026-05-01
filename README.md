# Jane Doe's Pegboard

A beautiful, module-based tool wall dashboard for organizing digital tools, with Apple-style smooth animations and pegboard visual design.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Node](https://img.shields.io/badge/node-18+-green)

---

## 📌 Project Overview

Jane Doe's Pegboard is a clean, minimal, and modern dashboard that organizes your work tools, resources, and modules into visual sticky notes on a virtual pegboard. It is designed for personal tool directories, bookmarks, and workspace management.

### Core Features

- ✨ Smooth Apple-style page entry animation
- 🎯 Real pegboard hole pattern background
- 📝 Modular sticky note layout
- ⚡ Lightweight & high performance
- 🐳 Docker support
- 🔄 GitHub Actions automation ready

---

## 📁 Project Structure
```text
pegboard/
├── .github/workflows/   # GitHub Actions CI/CD pipeline
├── models/              # MongoDB schema (optional)
├── public/              # Frontend UI
│   ├── index.html       # Main page
│   ├── style.css        # Styling, animations, pegboard background
│   └── app.js           # Frontend logic
├── .env                 # Environment variables
├── .dockerignore        # Docker ignore rules
├── Dockerfile           # Docker configuration
├── server.js            # Node.js + Express server
├── package.json         # Dependencies & scripts
└── README.md            # Project documentation
```

---

## 🎨 Design Philosophy

| Principle | Description |
|-----------|-------------|
| **Pegboard Aesthetics** | Realistic pegboard background for workshop-style visual experience |
| **Apple-style Animations** | Smooth fade-in, slide-in, and sequential pop-up effects |
| **Module-First Design** | Each sticky note represents a functional module |
| **Minimal & Clean UI** | No unnecessary inputs or visual noise |
| **Highly Extensible** | Easily add new categories and modules |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | Backend runtime |
| Express | Web server framework |
| HTML / CSS / Vanilla JS | Frontend UI |
| MongoDB | Optional database |
| Docker | Containerization |
| GitHub Actions | CI/CD automation |

---

## 🚀 Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
## 🐳 Run with Docker
```bash
# Build the image
docker build -t pegboard .

# Run the container
docker run -d -p 3000:3000 pegboard

```

## 📦 Default Modules
| Module | Description |
|--------|-------------|
| 🔧 Dev Tools | Development utilities and code resources |
| 🤖 AI Tools | Artificial intelligence platforms and APIs |
| 🎨 Design Resources | UI/UX tools, assets, and inspiration |
| ⚡ Productivity | Task management and workflow tools |
| 📚 References & Docs | Documentation, guides, and learning resources |


## 📄 License
MIT — Free for personal and commercial use.

## 🙏 Acknowledgments
Built with ❤️ for developers, designers, and digital organizers.

Reach out to 455606913yqh@gmail.com for any questions!