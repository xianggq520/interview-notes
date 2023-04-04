# HTML5 简介

HTML , HTML 4.01 的上一个版本诞生于 1999 年。
HTML5 是下一代 HTML 标准，HTML5 是 HTML 最新的修订版本，2014 年 10 月由万维网联盟（W3C）完成标准制定。

HTML5 是 W3C 与 WHATWG 合作的结果,WHATWG 指 Web Hypertext Application Technology Working Group。

# 新特性

- canvas 绘画元素
- video、audio 多媒体音视频播放元素
- 新的内容元素 article、header、footer、nav、section，aside、figure、figcaption 等
- 新的表单元素 date、time、calendar、url、email、search 等
- 支持 CSS3
- 本地存储
- 本地 SQL
- WEB 应用

# 申明方式

```html
<!DOCTYPE html>
```

# 中文网站乱码，须声明编码

```html
<meta charset="utf-8" />
```

# video

```html
<!--  controls 控制条 autoplay 自动播放 loop 循环播放muted 静音 poster 海报-->
<video src="a.mp3" autoplay loop controls muted poster="../poster.jpg"/>
```

# audio

```html
<!--  controls 控制条 autoplay 自动播放 loop 循环播放muted 静音-->
<audio src="a.wav" autoplay loop controls muted />
```