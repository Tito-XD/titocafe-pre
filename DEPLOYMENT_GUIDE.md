# 部署指南 - Tito's Cafe 到 Netlify

## ✅ 已完成

本地 Git 仓库已初始化并完成初始提交：
- **分支名称**: `hunyuan3`
- **提交信息**: "Initial commit: Tito's Cafe Furry merchandise website"
- **文件数量**: 78 个文件（包含 HTML、CSS、JS、图片等）

## 📁 项目结构

```
titocafe-pre/
├── .gitignore              # Git 忽略文件配置
├── README.md               # 项目说明文档
├── netlify.toml            # Netlify 配置文件
├── _redirects              # URL 重定向规则
├── index.html              # 主页
├── css/
│   └── style.css         # 主样式表
├── js/
│   └── main.js           # 交互功能
├── pages/
│   ├── characters.html   # 角色介绍页
│   ├── shop.html         # 周边商店页
│   ├── gallery.html      # 作品画廊页
│   └── about.html        # 关于我们页
└── assets/
    └── images/          # 所有图片资源（64张）
```

## 🚀 使用 GitHub Desktop 推送到 GitHub

### 步骤 1: 打开 GitHub Desktop

1. 启动 **GitHub Desktop** 应用程序
2. 如果没有登录，请先登录你的 GitHub 账号

### 步骤 2: 添加本地仓库

1. 点击菜单 **File** → **Add Local Repository...**
2. 浏览并选择文件夹：`C:\Users\tito\WorkBuddy\20260429123326`
3. 点击 **Add Repository**

### 步骤 3: 发布到 GitHub

1. 在 GitHub Desktop 中，点击右上角的 **Publish repository** 按钮
2. 填写仓库信息：
   - **Name**: `titocafe-pre`
   - **Description**: `Tito's Cafe - Furry Merchandise Website`
   - **Keep this code private**: 根据需要选择（建议公开，方便 Netlify 部署）
3. 点击 **Publish repository** 按钮

### 步骤 4: 推送 hunyuan3 分支

1. 发布成功后，当前分支应该是 `hunyuan3`
2. 如果没有自动推送，点击 **Push origin** 按钮手动推送

## 🌐 部署到 Netlify

### 方法 1: 从 GitHub 导入（推荐）

1. 登录 [Netlify](https://app.netlify.com)
2. 点击 **Add new site** → **Import an existing project**
3. 选择 **GitHub** 作为 Git provider
4. 授权 Netlify 访问你的 GitHub 账号
5. 选择仓库：`titocafe-pre`
6. 配置部署设置：
   - **Branch to deploy**: `hunyuan3`
   - **Build command**: *留空*
   - **Publish directory**: `.`（小数点，表示根目录）
7. 点击 **Deploy site**

### 方法 2: 拖拽部署（快速测试）

1. 访问 [Netlify Drop](https://app.netlify.com/drop)
2. 将整个项目文件夹拖拽到网页中
3. 等待上传和部署完成

## ⚙️ Netlify 配置说明

项目已包含 `netlify.toml` 配置文件：

```toml
[build]
  publish = "."
  command = ""

[context.production]
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

这表示：
- 发布目录是根目录（`.`）
- 不需要构建命令（纯静态网站）
- 所有请求都重定向到 `index.html`（支持 SPA 模式）

## 🔍 验证部署

部署成功后：

1. Netlify 会生成一个随机子域名（如 `amazing-name-123456.netlify.app`）
2. 点击该链接访问你的网站
3. 检查所有页面是否正常加载
4. 测试响应式设计（桌面、平板、手机）

## 🎨 自定义域名（可选）

如果想使用 `tito.cafe` 域名：

1. 在 Netlify 项目设置中，点击 **Domain management**
2. 点击 **Add custom domain**
3. 输入你的域名：`tito.cafe`
4. 按照 Netlify 的指示更新 DNS 设置

## 📝 后续更新

每次修改代码后：

1. 在本地修改文件
2. 使用 GitHub Desktop 提交更改（**Commit to hunyuan3**）
3. 点击 **Push origin** 推送到 GitHub
4. Netlify 会自动检测并重新部署

## 🐛 常见问题

### 1. 图片不显示

**原因**: 文件路径错误或图片文件名包含特殊字符

**解决**:
- 检查 HTML 中的 `src` 路径
- 确保图片文件在 `assets/images/` 目录下
- 避免使用中文或特殊字符命名文件

### 2. 页面样式丢失

**原因**: CSS 文件路径错误

**解决**:
- 检查 `index.html` 中的 `<link rel="stylesheet" href="css/style.css">`
- 确保 `css/style.css` 文件存在

### 3. Netlify 部署失败

**原因**: 配置文件错误或文件路径问题

**解决**:
- 检查 `netlify.toml` 配置
- 查看 Netlify 部署日志（**Deploys** → 点击失败部署 → **Deploy log**）
- 确保所有文件都已推送到 GitHub

## 📊 项目统计

- **总文件数**: 78 个
- **HTML 页面**: 5 个（主页 + 4 个子页面）
- **CSS 代码**: 完整设计系统
- **JavaScript**: 交互功能（购物车、动画、弹窗等）
- **图片资源**: 64 张（角色立绘、贴纸、合影等）
- **Git 分支**: hunyuan3
- **初始提交**: 3473015

## 🎉 完成！

现在你可以：
1. 使用 GitHub Desktop 推送到 `titocafe-pre` 仓库
2. 在 Netlify 上部署你的网站
3. 与朋友分享你的 Furry 周边网站！

---

**需要帮助？** 查看 [Netlify 文档](https://docs.netlify.com) 或 [GitHub Desktop 文档](https://docs.github.com/en/desktop)
