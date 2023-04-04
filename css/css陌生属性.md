# break-inside

break-inside 属性规定在指定元素内部是否应发生分页（page-break）、分列（column-break）或分区（region-break）

可选值avoid、avoid-column、avoid-page、avoid-region


```css
/* 避免在元素内出现页、列、区域中断 */
break-inside: avoid; 
```

```css
/* 打印模式下避免图片中断 */
@media print {
  img {
    display: block;
    break-inside: avoid;
  }
}

```


# 粘滞定位

距离浏览器窗顶部20px时静止，类似position:fixed

```css
.a {
  position: sticky;
  top: 20px;
}

```

# background-attachment

可选值scroll和fixed

- scroll 随容器一起滚动
- fixed 相对浏览器窗口定位，**当容器滚出浏览器窗口之后，图片也会消失**。可以用于实现视差效果。


# 100vw 和 100% 的区别

无滚动条时 100vw === 100%， 有滚动条时 100vw !== 100%， vw包含滚动条的尺寸，100%不包含。

# position: relative + top/left/right/bottom

`position:relative`+`top/left/right/bottom`相对自己定位，`position:absolute`相对临近的非static定位的元素。

# letter-spacing 文字间距

# text-indent 首行缩进

# will-change

`will-change`告诉浏览器元素即将发生的变化，浏览器将提前启动优化机制，提升页面的响应速度。

```css
/* Keyword values */
will-change: auto;
will-change: scroll-position;
will-change: contents;
will-change: transform; /* Example of <custom-ident> */
will-change: opacity; /* Example of <custom-ident> */
will-change: left, top; /* Example of two <animatable-feature> */

```

会消耗额外的性能，因此推荐在需要的时候再开启，避免长时间开启造成的性能消耗。

```js

const el = document.getElementById("element");

// Set will-change when the element is hovered
el.addEventListener("mouseenter", hintBrowser);
el.addEventListener("animationEnd", removeHint);

function hintBrowser() {
  // The optimizable properties that are going to change
  // in the animation's keyframes block
  this.style.willChange = "transform, opacity";
}

function removeHint() {
  this.style.willChange = "auto";
}

```