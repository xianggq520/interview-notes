# WeakMaps

WeakMaps 的 key 必须为`Object类型`的数据，不能为基本类型的数据（如：Symbol）。

```js
const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
  button.clicked = false;
  button.addEventListener('click', () => {
    button.clicked = true;
    const currentButtons = [...document.querySelectorAll('.button')];
    if (currentButtons.every((button) => button.clicked)) {
      console.log('All buttons have been clicked!');
    }
  });
});

/**
 * 问题：
 * 
 * clicked 是enumerable的，可以通过Object.keys()、 for...in等方式获取，容易被其他地方篡改，通过Object.defineProperty等方法限制，但代码会变的冗余。
 * 
 * 因此可以采用WeakMap来解决类似的问题
 */
```

vs

```js
const buttons = document.querySelectorAll('.button');
const clicked = new WeakMap();
buttons.forEach((button) => {
  clicked.set(button, false);
  button.addEventListener('click', () => {
    clicked.set(button, true);
    const currentButtons = [...document.querySelectorAll('.button')];
    if (currentButtons.every((button) => clicked.get(button))) {
      console.log('All buttons have been clicked!');
    }
  });
});
```

此外，如果从 DOM 中删除任何按钮，则关联的元数据将自动进行垃圾回收。**WeaMap 的 key 将随着 key 引用的源的改变而销毁**


```js
var a = { name: 'xxs'}

var b = new WeakMap()
b.set(a, 1)

console.log("b.has(a)", b.has(a)) // true

a = { name: 'xxs2'}

console.log("b.has(a)", b.has(a)) // false  a的引用变更了
```

**可以用在自定义深拷贝中解决循环引用问题，标记对象的某些状态，数组中复杂类型数据去重等场景。**