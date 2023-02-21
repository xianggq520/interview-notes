# clipPath

SVG 元素 <clipPath> 定义一条剪切路径，可作为其他元素的 clip-path 属性的值。

剪切路径限制了图形的可见范围。从概念上来说，如果图形超出了当前剪切路径所包围的区域，那么超出部分将不会绘制。


```html
<svg viewBox="0 0 100 100">
  <clipPath id="myClip">
    <!--
      圆圈外的所有东西都会被裁剪掉，因此不可见。
    -->
    <circle cx="40" cy="35" r="35" />
  </clipPath>

  <!-- 作为引用元素（英文原文：for reference）的黑色心形 -->
  <path id="heart" d="M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z" />

  <!--
    和上述黑色心形形状相同的红色心形，剪切路径是上面定义的圆；
    红色心形只有在圆内的部分可见。
  -->
  <use clip-path="url(#myClip)" xlink:href="#heart" fill="red" />
</svg>

```

```css
/* 如果浏览器支持几何属性 r，可以加一点 css */

@keyframes openYourHeart {from {r: 0} to {r: 60px}}

#myClip circle {
  animation: openYourHeart 15s infinite;
}

```

