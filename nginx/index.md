# nginx

## 安装

```sh
yum repolist

yum update -y

yum install epel-release -y

yum install nginx -y

systemctl start nginx.service
systemctl enable nginx.service #开机自启动
systemctl status nginx.service #查看状态及日志

netstat -lntup #查看断开占用

```

## 生成 SSL 证书

```sh
mkdir /etc/nginx/certs
cd /etc/nginx/certs
# -x509 格式
# nginx-selfsigned.key 私钥
# nginx-selfsigned.crt 证书、包含公钥
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout nginx-selfsigned.key -out nginx-selfsigned.crt

```

## 配置 nginx

修改 nginx.conf 文件

[/etc/nginx/nginx.conf](./nginx.conf)
