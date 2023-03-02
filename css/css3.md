
# flex布局 弹性盒子

[flex布局](flex布局.md)


# grid布局 网格布局

[网格布局](grid.md)


# 多列布局

[多列布局](多列布局.md)


# transition过渡

css属性过渡渐变

```css

/* transition：property time timing-function delay; */

/* 复合属性 */
/* transition: all 2s; */
/* 拆分 */
transition-property: background-color,border-radius;
transition-duration: 2s;
transition-delay: 0;
transition-timing-function: linear;

```

# transform 

参数有translate[X|Y|Z]、scale[X|Y|Z]、rotate[X|Y|Z]、rotate3d、skew[X|Y|Z]

`transform-origin`设置变换原点

**有GPU加速，在独立的图层上渲染**，诸如`position：absolute`脱离的文档流的属性，依然和文档在合成图层上一起渲染。因此**推荐使用transform，提升渲染性能**。


# 关键帧动画

`@keyframes`

```css
/* 合成 */
animation: rotate 2s infinite linear;
/* 单独属性 */
animation-name: rotate;
animation-duration: 2s;
animation-iteration-count: infinite;
/* linear、ease-in... steps(帧数，start/end) 逐帧动画 */
animation-timing-function: steps(1, end); /* 一帧一帧的播放动画，跳过中间过渡，end最后一帧看不到，start 第一帧看不到*/
/* paused 暂停 */
animation-play-state:running;
animation-delay: 0s;
animation-fill-mode: forwards;

```

# transform3d

```css

transform-style: preserve-3d;

/* 
  transform-style: preserve-3d;
  开启3d场景后3d变换才能生效
  tranform: translateZ|rotateZ|scaleZ|skewZ;
*/

```

# 引入自定义字体

```css

@font-face {
  font-family: xxs;
  src: url(./xxs.ttf);
}

html {
  font-family: xxs;
  text-shadow: 4px 0 0 yellow;
}
```