# Zhishi — AI 笔记与桌面应用

一个支持 AI 分析、润色、对话、Markdown 预览/多主题、Mermaid、KaTeX，以及多格式导出的现代笔记应用。内置 Electron 打包流程，可一键生成 Win/macOS/Linux 桌面版本。

## 开发

```bash
npm install
npm run dev    # 开发服务：默认 3334
```

## 特性速览

- 笔记：分类、标签、全局搜索、侧栏与列表折叠动画
- AI：分析/润色带确认弹窗；对话侧栏；多模型预设；撤回式编辑
- 预览：多套 Markdown 主题（经典/书卷/柔彩/纸质/夜间/高对比）、Mermaid、KaTeX、任务列表
- 导出：PDF/PNG/HTML/Markdown，尺寸/方向/缩放/边距可调，文件保存支持文件选择器
- 备份：笔记+配置 JSON 导入/导出，支持文件保存器

## 打包桌面应用（Electron）

1. 安装 Node 18+。
2. 构建并打包：
   ```bash
   npm run electron:build
   ```
   产物位于 `release/`（Windows: exe/zip，macOS: dmg/zip，Linux: AppImage/deb）。

调试桌面版可先构建前端再运行 Electron：
```bash
npm run electron:dev
```
