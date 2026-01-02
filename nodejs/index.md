# 概述

Node 应用由模块组成，采用 CommonJS 模块规范。

每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。

如果想在多个文件分享变量，必须定义为 global 对象的属性。当然，不推荐使用这种方案。

# CommonJS 规范

CommonJS 规范规定，每个模块内部，module 变量代表当前模块。这个变量是一个对象，它的 exports 属性（即 module.exports）是对外的接口。加载某个模块，其实是加载该模块的 module.exports 属性。

CommonJS 模块的特点：

1. 所有代码都运行在模块作用域，不会污染全局作用域。
2. 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。
3. 模块加载的顺序，按照其在代码中出现的顺序。

# module

Node 内部提供一个 Module 构建函数。所有模块都是 Module 的实例。为每个文件都实例化一个 module 对象。

moudle 对象的属性

- module.id 模块的识别符，通常是带有绝对路径的模块文件名。当前模块的 id 为"."
- module.filename 模块的文件名，带有绝对路径。
- module.loaded 返回一个布尔值，表示模块是否已经完成加载。
- module.parent 返回一个对象，表示调用该模块的模块。可以用来判断是否为入口文件。
- module.children 返回一个数组，表示该模块要用到的其他模块。
- module.exports 表示模块对外输出的值。

# require

Node 使用 CommonJS 模块规范，内置的 require 函数用于加载模块文件。

require 函数的基本功能是，读入并执行一个 JavaScript 文件，然后返回该模块的 exports 对象。如果没有发现指定模块，会报错。

require 函数用于加载文件，后缀名默认为.js。如果.js 文件没有找到，Node 会尝试查找.json、.node 扩展类型的文件。

如果 require 函数的参数字符串不以“./“或”/“开头，则表示加载的是一个默认提供的核心模块（位于 Node 的系统安装目录中），或者一个位于各级 node_modules 目录的已安装模块（全局安装或局部安装），所以 node 会先从核心包中查找，再依次从项目根目录下的 node_modules 逐级向外查找。

require 加载一个第三方模块时，会将模块的 package.json 中的 main 字段指定的文件作为入口文件加载整个模块，若没有 main 字段或者没有 package.json，则将模块目录下的 index.js/index.node 作为模块的入口文件。

require 函数会将加载过的模块缓存到 require.cache 对象之中，key 为模块文件的绝对路径，可以用 delete require.cache.modulename 删除模块缓存。

如果发生模块的循环加载，即 A 加载 B，B 又加载 A，则 B 将加载 A 的不完整版本。

require 方法有一个 main 属性，可以用来判断模块是直接执行，还是被调用执行。直接执行的时候（node module.js），require.main 属性指向模块本身，即 require.main === module。

module.exports 输出的基本类型值时，输出的是值的拷贝。

require 模块加载大致步骤：

1.  检查 Module.\_cache，是否缓存之中有指定模块
2.  如果缓存之中没有，就创建一个新的 Module 实例
3.  将它保存到 require.cache 缓存中
4.  使用 module.load() 加载指定的模块文件，
    读取文件内容之后，调用 module.compile(content, filename)函数，创建包裹函数，注入执行环境变量并执行。
    1. 生成一个 require 函数，指向 module.require
    2. 加载其他辅助方法到 require
    3. 将文件内容放到一个函数之中，该函数可调用 require
    4. 执行该函数
5.  如果加载/解析过程报错，就从 require.cache 缓存中删除该模块
6.  返回该模块的 module.exports

## 安装

```sh
# setup_16.x 可以替换为想下载的版本
curl -sL https://rpm.nodesource.com/setup_16.x | sudo bash -

sudo dnf install -y nodejs
```

## 卸载 nodejs

```sh

sudo yum remove nodejs npm -y

sudo rm -f /usr/local/bin/node   # 删除node软链接
sudo rm -f /usr/local/bin/npm    # 删除npm软链接
sudo rm -f /usr/local/bin/npx    # 若存在npx软链接

```
