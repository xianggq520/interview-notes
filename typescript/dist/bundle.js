(function () {
  'use strict';

  /**
   * 基本类型
   *
   * number, string, boolean, symbol, BigInt
   */
  // 枚举类型 enum
  // 常量枚举 const enum
  var Tool;
  (function (Tool) {
      Tool[Tool["bans"] = 0] = "bans";
      Tool[Tool["qianzi"] = 1] = "qianzi";
  })(Tool || (Tool = {}));
  const tool = Tool.bans;
  console.log(tool);
  var Animal;
  (function (Animal) {
      Animal[Animal["dog"] = 0] = "dog";
      Animal[Animal["horse"] = 1] = "horse";
      Animal[Animal["mouse"] = 2] = "mouse";
  })(Animal || (Animal = {}));
  const mj = Animal.dog;
  console.log(mj);
  // 断言
  // 非空断言 expr!
  const el = document.getElementById("app");
  el.style.background = 'red';
  // el?.style.display js 可选链读值操作
  // el??"abc"  js 控制合并操作符 null和undefined时返回 abc
  //  断言 as
  el.style.background = 'red';
  el.style.background = 'red'; // 不推荐
  // this
  const person = {
      name: "zs",
      age: 43
  };
  function getVal(key) {
      return this[key];
  }
  getVal.call(person, "age");
  function toArray(value) {
      if (typeof value === "string") {
          return value.split("");
      }
      else {
          return value.toString().split("").map(Number);
      }
  }
  // 缩小联合类型范围
  toArray('123');
  toArray(123);

})();
//# sourceMappingURL=bundle.js.map
