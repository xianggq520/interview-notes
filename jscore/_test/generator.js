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


/**
 * 
 * 如下是一个自动调用generator函数的工具函数 __awaiter
 * 
 */

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); } // 关键函数
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
 
function promiseGenerator() {
    return __awaiter(this, void 0, void 0, function* () {
         
        const one = yield 1;
        
        const two = yield new Error("@@@@@");
             
        // 最后一次执行next的返回值
        return two
    });
}


/**
 * 
 * 实现一个 add(1)(2)(3)(4) = 10
 */
