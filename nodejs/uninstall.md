```sh

#!/bin/bash
# 卸载通过yum安装的Node.js和npm
sudo yum remove nodejs npm -y

# 手动删除残留文件
sudo rm -f /usr/local/bin/node /usr/local/bin/npm /usr/local/bin/npx
sudo rm -rf /opt/node-v*  # 替换为实际源码目录
sudo rm -rf /usr/local/lib/node_modules ~/.npm ~/.node-gyp
sudo rm -f /usr/local/include/node /usr/local/share/man/man1/node.1 ~/.npmrc

# 查找并删除隐藏残留
find ~/ -name "node" -o -name "node_modules" -exec rm -rf {} +
find /usr/local -name "node" -o -name "node_modules" -exec rm -rf {} +

# 验证卸载
if ! command -v node &> /dev/null; then
    echo "Node.js已成功卸载"
else
    echo "卸载失败，请检查残留文件"
fi

```
