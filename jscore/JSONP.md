
JSONP是一种利用script标签可跨域，并且js类型脚步加载后自动执行的特性来实现浏览器跨域通信。

1. server side

```php

<?php
$myJSON = '{ "name":"John", "age":30, "city":"New York" }';

echo "myFunc(".$myJSON.");";
?>

```

client side

```js
// 前后端约定好回调函数名，需要定义全局回调函数
function myFunc(myObj) {
  document.getElementById("demo").innerHTML = myObj.name;
}

```


2. Callback Function

client side

```js
// 前后端约定好，回调函数名通过callback参数提供，需要定义全局回调函数myDisplayFunction
let s = document.createElement("script");
s.src = "jsonp_demo_db.php?callback=myDisplayFunction";
document.body.appendChild(s);
```
