# Git - 生成 SSH 公钥

cd ~/.ssh

默认情况下，用户的 SSH 密钥存储在其 ~/.ssh 目录下

ssh-keygen -o

生成一对以 id_dsa 或 id_rsa 命名的文件，其中一个带有 .pub 扩展名。 .pub 文件是你的公钥，另一个则是与之对应的私钥
如果你使用了密码，那么请确保添加了 -o 选项，它会以比默认格式更能抗暴力破解的格式保存私钥

# 本地仓库同步到远处仓库

1、创建远程仓库

2、创建本地仓库

git init 【project name]

3、本地仓库和远程仓库关联

git remote add origin 远程仓库url

4、同步本地仓库到远处仓库

git push -u origin master
//等同于
//将当前分支提交到远程origin的master分支
git push origin master 
//将远程仓库origin的master分支与本地仓库master分支关联
git branch --set-upstream-to=origin/master master