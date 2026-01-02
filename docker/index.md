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
    "https://xxx.mirror.aliyuncs.com"
  ]
}
EOF
# 重启docker服务
sudo systemctl daemon-reload && sudo systemctl restart docker
```

## 构建镜像

```sh
# . 当前目录下
docker build -t myapp:1.0 .

```

## 本地镜像查询

```sh
docker images | grep myapp
```

## 运行镜像

```sh
# 主机port:镜像port  主机端口->镜像EXPOSE端口
# Map a host port to a container port (e.g., -p 8080:80 maps host port 8080 to container port 80).
docker run -p 3000:3000 myapp:1.0

# 查询当前正在运行的容器
docker ps

# 停止
docker stop [容器id]

# The command docker-compose up --build -d is used to build, (re)create, and start containers defined in your Docker Compose file in the background
# up: The primary command to aggregate and start all services defined in your docker-compose.yml.
# --build: Forces Docker Compose to build or rebuild the images for each service before starting the containers. This is essential if you have updated your Dockerfile or local source code and want those changes reflected in the running environment.
# -d (Detached mode): Runs the containers in the background, allowing you to continue using the terminal without being attached to the container's logs.

# 批量启动镜像
docker-compose up --build -d

# 批量停止
docker compose down

# 删除镜像
# docker rmi id/name:tag
docker rmi myapp:1.0

# 删除已停止的容器
docker rm 容器id
```
