async function* fetchInSeries([...urls]) {
  for (const url of urls) {
    const res = await Promise.resolve(url);
    //g.next().value 得到 res
    console.log('res=>', res);
    yield res;
  }
}

async function getData() {
  const g = fetchInSeries(['1.json', '2.json', '3.json']);
  /*
    let result = await g.next( )
    while (!result.done) {
    console.log (result.value);
    result = await g.next ()
  */ let result;
  while (!(result = await g.next()).done) {
    console.log(result.value);
  }
}

// async function getData() {
//   // for await of: #利用迭代器的特性配合 await 解析生成器
//   for await (const value of fetchInSeries(['1.json', '2.json', '3.json'])) {
//     console.log(value);
//   }
//   console.log('return =>');
// }

getData().then((res) => console.log('@@@', res));
