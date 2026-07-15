# 视频播放跳转网页

## 项目说明

这是一个支持 GitHub 上传到 Cloudflare Pages 的视频播放网页，视频播放完毕后会自动跳转到 `minecraft.easyplay.dpdns.org`。

## 如何使用

### 1. 放入视频文件

将你的视频文件命名为 `video.mp4`（或 `video.webm`、`video.ogg`），然后放入 `videos/` 文件夹中。

### 2. 部署到 GitHub

1. 在 GitHub 上创建一个新仓库
2. 初始化 Git：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <你的仓库地址>
   git push -u origin main
   ```

### 3. 部署到 Cloudflare Pages

1. 登录 Cloudflare 控制台
2. 进入 Pages
3. 点击「创建项目」->「连接 Git」
4. 选择你的 GitHub 仓库
5. 构建设置：
   - 框架预设：无
   - 构建命令：留空
   - 构建输出目录：留空
6. 点击「保存并部署」

## 文件结构

```
videopage/
├── index.html      # 主页面
├── style.css       # 样式文件
├── script.js       # JavaScript 逻辑
├── package.json    # 项目配置
├── .gitignore      # Git 忽略文件
└── videos/         # 视频文件夹（请放入你的视频）
    └── video.mp4   # 你的视频文件（需要你自己添加）
```

## 本地测试

如果你想在本地测试，可以使用任何静态文件服务器，例如：

```bash
npx serve . -p 8080
```

然后在浏览器中打开 `http://localhost:8080` 即可。
