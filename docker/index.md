# docker

## 安装

```sh
yum update -y
# 安装所需的软件包以允许yum使用HTTPS存储库
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
# 使用aliyun速度更快
sudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

```

## 安装最新版 Docker

```
# 安装Docker Engine-Community最新版本
sudo yum -y install docker-ce docker-ce-cli containerd.io
# 如果要连同docker compose插件一起安装
sudo yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

```

## 安装指定 docker 版本

```sh
# 列出可用版本
sudo yum list docker-ce --showduplicates | sort -r
# 安装指定版本(使用以下命令安装所需的 Docker 版本(将<VERSION STRING》替换为所需版本))
sudo yum install -y docker-ce-<VERSION STRING> docker-ce-cli-<VERSION STRING> containerd.io
# eg.版本号只要18.09.4这种三位即可
sudo yum install -y docker-ce-18.09.4 docker-ce-cli-18.09.4 containerd.io

```

## 启动 Docker 服务 查看状态 开机启动服务

```sh
# 启动Docker服务
sudo systemctl start docker
# 设置Docker服务开机自启动
sudo systemctl enable docker
# 查看docker服务状态
sudo systemctl status docker

```

## 修改 docker 镜像源

```sh
# 创建目录(如果已经存在则忽略此步骤)
sudo mkdir -p /etc/docker
# 向配置文件写入
sudo tee /etc/docker/daemon.json <<- 'EOF'
{
  "registry-mirrors":[
  "https://docker.m.daocloud.io",
  "https://docker.imgdb.de",
  "https://docker-0.unsee.tech",
  "https://docker.hlmirror.com",
  "https://docker.1ms.run",
  "https://func.ink",
  "https://lispy.org",
  "https://docker.xiaogenban1993.com"
  ]
}
EOF
# 重启docker服务
sudo systemctl daemon-reload && sudo systemctl restart docker
```
