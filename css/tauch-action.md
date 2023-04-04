# touch-action

- touch-action: auto;
  由浏览器决定
- touch-action: none; 
  所有触摸行为都需自定义
- touch-action: manipulation;
  禁用非标准手势，如：双击缩放，可以解决移动端浏览器点击300ms延迟问题，但是safari浏览器有兼容性问题

**tauch-action样式会产生独立的`Slow scroll rects`**
