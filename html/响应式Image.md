# 像素密度适配：srcset属性

像素密度的适配，只适合显示区域一样大小的图像。
srcset属性用来指定多张图像，适应不同像素密度的屏幕。它的值是一个逗号分隔的字符串，每个部分都是一张图像的 URL，后面接一个空格，然后是像素密度的描述符。

```html
<img srcset="foo-320w.jpg,
             foo-480w.jpg 1.5x,
             foo-640w.jpg 2x"
     src="foo-640w.jpg">

```

图像 URL 后面的像素密度描述符，格式是像素密度倍数 + 字母x。1x表示单倍像素密度，可以省略。浏览器根据当前设备的像素密度，选择需要加载的图像。

如果srcset属性都不满足条件，那么就加载src属性指定的默认图像。


# 图像大小适配：srcset属性 + sizes属性

如果希望不同尺寸的屏幕，显示不同大小的图像，srcset属性就不够用了，必须搭配sizes属性。

```html

<img srcset="foo-160.jpg 160w,
             foo-320.jpg 320w,
             foo-640.jpg 640w,
             foo-1280.jpg 1280w"
     sizes="(max-width: 440px) 100vw,
            (max-width: 900px) 33vw,
            254px"
     src="foo-1280.jpg">

```

上例的四种图片的原始宽度分别为160像素、320像素、640像素和1280像素。

sizes属性列出不同设备的图像显示宽度。

宽度不超过440像素的设备，图像显示宽度为100%；宽度441像素到900像素的设备，图像显示宽度为33%；宽度900像素以上的设备，图像显示宽度为254px。

假定当前设备的屏幕宽度是480px，浏览器从sizes属性查询得到，图片的显示宽度是33vw（即33%），等于160px。srcset属性里面，正好有宽度等于160px的图片，于是加载foo-160.jpg。

**sizes属性必须与srcset属性搭配使用。单独使用sizes属性是无效的。**


# <picture>标签，<source>标签

```html

<picture>
  <source srcset="homepage-person@desktop.png,
                  homepage-person@desktop-2x.png 2x"       
          media="(min-width: 990px)">
  <source srcset="homepage-person@tablet.png,
                  homepage-person@tablet-2x.png 2x" 
          media="(min-width: 750px)">
  <img srcset="homepage-person@mobile.png,
               homepage-person@mobile-2x.png 2x" 
       alt="Shopify Merchant, Corrine Anestopoulos">
</picture>

```

<source>标签的type属性可以让浏览器跳过不支持的文件类型

```html

<picture>
  <source type="image/svg+xml" srcset="logo.xml">
  <source type="image/webp" srcset="logo.webp"> 
  <img src="logo.png" alt="ACME Corp">
</picture>

```
上面例子中，图像加载优先顺序依次为 svg 格式、webp 格式和 png 格式，只要有一个正常加载就跳过其他的。