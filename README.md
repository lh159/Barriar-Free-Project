# 声声相伴静态网站

这是「声声相伴」无障碍沟通公益项目专题站。

## 页面

- `index.html`：首页
- `features.html`：功能介绍，预留本地视频位置
- `impact.html`：公益成果
- `stories.html`：匿名用户故事

## 本地预览

```bash
python3 -m http.server 8080
```

然后访问：

```text
http://localhost:8080
```

## 视频替换

把本地视频文件放入 `videos/` 目录，建议使用以下文件名：

- `videos/face-to-face.mp4`
- `videos/pronunciation-practice.mp4`
- `videos/daily-phrases.mp4`
- `videos/training-feedback.mp4`

如果使用其他文件名，请同步修改 `features.html` 中对应的 `data-video-src`。

注意：GitHub 普通仓库单个文件建议控制在 100MB 以内。视频较大时，可以压缩后提交，或改用外部静态资源链接。

## 部署

这是纯静态网站，可以部署到 GitHub Pages 或任意静态托管服务。
