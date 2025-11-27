# Insight Notes – AI-first Markdown Notebook

Clean, keyboard-friendly note app with AI assist (analyze/polish/chat), multiple Markdown themes, Mermaid & KaTeX, rich exports, and desktop packaging via Electron.

[![CI](https://github.com/KrisLiu16/insight-notes/actions/workflows/ci.yml/badge.svg)](https://github.com/KrisLiu16/insight-notes/actions/workflows/ci.yml)

## Features
- Notes: categories, tags, global search, sidebar/list collapse, undo/redo controls.
- AI: analyze & polish with confirmation, inline chat panel, customizable prompts/model/base URL.
-, Preview: multiple themes, Mermaid, KaTeX, task lists with styled checkboxes, code blocks with line numbers and language labels.
- Images: paste/insert with auto-compress; stored as attachments to keep Markdown readable.
- Export/Backup: PDF/PNG/HTML/Markdown with sizing controls; JSON import/export for notes + settings; file picker support.
- Desktop: Electron build scripts for Win/macOS/Linux.

## Quick Start
```bash
npm install
npm run dev        # Vite dev server (default port 3334)
```

### Useful Scripts
- `npm run build` – production bundle
- `npm run dev` – dev server
- `npm run electron:dev` – build front-end then run Electron for local desktop debugging
- `npm run electron:build` – clean release/ + build front-end + package Electron (artifacts in `release/`)

## Keyboard Shortcuts
- `Cmd/Ctrl + K` – global search / command palette  
- `Cmd/Ctrl + S` – save  
- `Cmd/Ctrl + Shift + P` – open export  
- `Cmd/Ctrl + Enter` – AI polish  
- `Cmd/Ctrl + Z` / `Cmd/Ctrl + Shift + Z` – undo / redo  

## Desktop Packaging (Electron)
Requires Node 18+. Artifacts land in `release/`:
```bash
npm run electron:build
```
Windows: exe/zip, macOS: dmg/zip, Linux: AppImage/deb. For debugging: `npm run electron:dev`.

## Tech Stack
- React + Vite + TypeScript + Tailwind
- react-markdown + remark/rehype plugins (GFM, math, Katex)
- Mermaid, html-to-image, jsPDF
- Electron + electron-builder

## CI
GitHub Actions (`.github/workflows/ci.yml`) runs install + build on push/PR, uploading `dist/` as an artifact.

## License
MIT

---

## 中文简介（Insight Notes）
- AI 笔记应用：支持分析/润色/对话、自定义模型和提示词。
- 预览：多主题、Mermaid、KaTeX、任务列表、代码行号与语言标签。
- 图片：粘贴/插入自动压缩，附件存储，Markdown 仍简洁。
- 导出/备份：PDF/PNG/HTML/Markdown，JSON 导入/导出；Electron 打包桌面版。
- 快捷键：`Cmd/Ctrl+K` 搜索，`Cmd/Ctrl+S` 保存，`Cmd/Ctrl+Shift+P` 导出，`Cmd/Ctrl+Enter` 润色，`Cmd/Ctrl+Z` 撤销，`Cmd/Ctrl+Shift+Z` 重做。

运行：
```bash
npm install
npm run dev
```
打包桌面版：
```bash
npm run electron:build
```
