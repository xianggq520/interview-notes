# nginx

## 安装

```sh
yum repolist

yum install epel-release -y

yum install nginx -y

systemctl start nginx.service
systemctl enable nginx.service #开机自启动
systemctl status nginx.service #查看状态及日志

netstat -lntup #查看断开占用

yum update -y


```
