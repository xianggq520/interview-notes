# canvas

canvas 实例的方法

- arc()

  ```js
  //counterclockwise 逆时针  clockwise 顺时针
  ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
  ```

- arcTo()

  ```js
  // x1 y1,x2,y2 为两个控制点  radius 弧度
  arcTo(x1, y1, x2, y2, radius);
  ```

- beginPath()

  开始新的路径

- bezierCurveTo()

  ```js
  bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
  ```

- clearRect()

  ```js
  // 清空矩形
  clearRect(x, y, width, height);
  ```

- clip()

  ```js
  // 区域裁剪
  ctx.clip();
  ```

- closePath()

  ```js
  ctx.closePath(); // 连接起始点和终点
  ```

- createConicGradient()

  ```js
  // 扇形渐变
  createConicGradient(startAngle, x, y);
  ```

- createImageData()

  ```js
  // 创建图片数据集合
  const imageData = ctx.createImageData(100, 100);
  ctx.putImageData(imageData, 20, 20);
  ```

- createLinearGradient()

  ```js
  // 两点连线做线性渐变
  createLinearGradient(x0, y0, x1, y1);
  ```

- createPattern()

  ```js
  // 创建规则
  const pattern = ctx.createPattern(img, 'repeat');
  ctx.fillStyle = pattern;
  ```

- createRadialGradient()

  ```js
  // 渐变
  const gradient = ctx.createRadialGradient(110, 90, 30, 100, 100, 70);
  ```

- drawFocusIfNeeded()

  ```js
  // Draw focus ring, if appropriate
  ctx.drawFocusIfNeeded(el);
  ```

- drawImage()

  ```js
  ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);
  ```

- ellipse()

  ```js
  // 画椭圆
  ellipse(
    x,
    y,
    radiusX,
    radiusY,
    rotation,
    startAngle,
    endAngle,
    counterclockwise
  );
  ```

- fill()

  ```js
  // path 可以是 new Path2D();
  fill(path?, fillRule?)
  ```

- fillRect()

  ```js
  fillRect(x, y, width, height);
  ```

- fillText()

  ```js
  // maxWidth 会压缩文本的显示宽带
  fillText(text, x, y, maxWidth?)
  ```

- getContextAttributes()

  获取上下文对象的配置对象

- getImageData()

  获取图片的数据

  ```js
  getImageData(sx, sy, sw, sh, settings);
  ```

- getLineDash()

  ```js
  ctx.setLineDash([10, 20]);
  console.log(ctx.getLineDash()); // [10, 20]
  ```

- getTransform()

  获取上下文对象的变换矩阵

- isContextLost() Experimental
- isPointInPath()

  判断一个点是否在路径上

  ```js
  ctx.setLineDash([10, 20]);
  console.log(ctx.getLineDash()); // [10, 20]
  ```

- isPointInStroke()

  ```js
  // 判断点是否在path之中
  isPointInStroke(path, x, y);
  ```

- lineTo()
- measureText()

  ```js
  // 测量文本
  let text = ctx.measureText('Hello world');
  console.log(text.width); // 56;
  ```

- moveTo()
- putImageData()
- quadraticCurveTo()

  ```js
  // 二次贝塞尔曲线 cpx, cpy 控制点，x, y终点
  quadraticCurveTo(cpx, cpy, x, y);
  ```

- rect()
- reset() Experimental
- resetTransform()

  ```js
  //重置变换矩阵
  resetTransform();
  ```

- restore()

  ```js
  // 重置到上一次save后的状态
  ctx.restore();
  ```

- rotate()

  ```js
  // 旋转
  ctx.rotate(Math.PI / 2);
  ```

- roundRect()

  ```js
  // 圆角矩形
  // radii：[0, 30, 50, 60]
  roundRect(x, y, width, height, radii);
  ```

- save()
- scale()

  缩放

- scrollPathIntoView() Experimental
- setLineDash()

  ```js
  ctx.setLineDash([5, 15]);
  ```

- setTransform()
- stroke()

  ```js
    ctx.stroke(path?);
  ```

- strokeRect()

  ```js
  ctx.strokeRect(20, 10, 160, 100);
  ```

- strokeText()

  ```js
  ctx.strokeText(text, x, y, maxWidth);
  ```

- transform()

  ```js
  ctx.transform(a, b, c, d, e, f);
  ```

- translate()

  ```js
  ctx.translate(x, y);
  ```
