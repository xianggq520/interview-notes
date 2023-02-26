
# async、await语法

`async`声明异步函数，`await`等待异步任务返回结果。

```js
async function * fetchInSeries([...urls]) {
  for (const url of urls) {
    const res = await Promise.resolve(url);
    //g.next().value 得到 res
    console.log("res=>", res)
    yield res;
  }
}

async function getData () {
  const g = fetchInSeries(['1.json', '2.json', '3. json'])
  /*
    let result = await g.next()
    while (!result.done) {
      console.log(result.value);
      result = await g.next()
    }
  */
  let result
  while (!(result = await g.next()).done) {
    console. log (result. value);
  }
}

```