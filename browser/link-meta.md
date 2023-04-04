# X-UA-Compatible

通过在 meta 中设置 X-UA-Compatible 的值，可以指定网页的兼容性模式设置

官网定义 X-UA-compatible 标头不区分大小写；不过，它必须显示在网页中除 title 元素和其他 meta 元素以外的所有其他元素之前，否则它不起作用

content 的内容是 IE=8，或者 IE=edge 等值，注意不是 IE8 或者直接写个 edge 的值，否则不起作用

```html
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />

<!-- 以上代码IE = edge告诉IE使用最新的引擎渲染网页，chrome = 1则可以激活Chrome Frame -->
```

# Cache-Control、Pragma、Expires

`Cache-Control、Pragma、Expires`指定请求和响应遵循的缓存机制。在请求消息或响应消息中设置 Cache-Control 并不会修改另一个消息处理过程中的缓存处理过程。请求时的缓存指令包括`no-cache、no-store、max-age、max-stale、min-fresh、only-if-cached`，响应消息中的指令包括`public、private、no-cache、no-store、no-transform、must-revalidate、proxy-revalidate、max-age`。

```html
<!-- 缓存协议 -->
<meta
  http-equiv="Cache-Control"
  content="no-cache, no-store, must-revalidate"
/>
<!-- 百度搜索引擎转码协议 -->
<meta http-equiv="Cache-Control" content="no-transform" />
<!-- 百度移动搜索引擎转码协议 -->
<meta http-equiv="Cache-Control" content="no-siteapp" />
<!-- 缓存协议 -->
<meta http-equiv="Pragma" content="no-cache" />
<!-- 缓存协议 -->
<meta http-equiv="Expires" content="0" />
```

# X-DNS-Prefetch-Control

X-DNS-Prefetch-Control 头控制着浏览器的 DNS 预读取功能

```html
<!-- on/off 开启/关闭域名预解析 -->
<meta http-equiv="x-dns-prefetch-control" content="on" />
<meta http-equiv="x-dns-prefetch-control" content="off" />
<!-- 强制查询特定主机名 -->
<link rel="dns-prefetch" href="http://www.spreadfirefox.com/" />
<link rel="dns-prefetch" href="//www.spreadfirefox.com" />
```

# format-detection

开启/关闭浏览器的内容自动转化功能

```html
<!-- 告诉浏览器不自动转化电话号码、邮件地址、地址信息、日期 -->
<meta
  name="format-detection"
  content="telephone=no,email=no,address=no,date=no"
/>
```

# baidu-site-verification

这个代码是百度站长平台验证网站归属权的验证代码

```html
<meta name="baidu-site-verification" content="NngcNDBY5f" />
```

# apple-touch-icon

apple 设备浏览器特有属性，响应式设计网页的 icon

```html
<link rel="apple-touch-icon" sizes="114x114" href="/custom_icon.png" />
```
