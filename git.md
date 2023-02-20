
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