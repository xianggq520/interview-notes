
```sh
> nslookup
> set type=ns //向本地 dns 服务器查询根服务器
```

Non-authoritative answer:
.	nameserver = i.root-servers.net.
.	nameserver = j.root-servers.net.
.	nameserver = k.root-servers.net.
.	nameserver = l.root-servers.net.
.	nameserver = h.root-servers.net.
.	nameserver = m.root-servers.net.
.	nameserver = g.root-servers.net.
.	nameserver = b.root-servers.net.
.	nameserver = c.root-servers.net.
.	nameserver = d.root-servers.net.
.	nameserver = a.root-servers.net.
.	nameserver = f.root-servers.net.
.	nameserver = e.root-servers.net.

```sh
> set type=a  //查询根服务器 ip
> j.root-servers.net.
```

Server:		183.221.253.100
Address:	183.221.253.100#53

Non-authoritative answer:
Name:	j.root-servers.net
Address: 192.58.128.30

```sh
> server 192.58.128.30
```

Default server: 192.58.128.30
Address: 192.58.128.30#53

```sh
> set type=ns
> com.
```
Server:		192.58.128.30
Address:	192.58.128.30#53

Non-authoritative answer:
*** Can't find com.: No answer

Authoritative answers can be found from:
com	nameserver = a.gtld-servers.net.
com	nameserver = b.gtld-servers.net.
com	nameserver = c.gtld-servers.net.
com	nameserver = d.gtld-servers.net.
com	nameserver = e.gtld-servers.net.
com	nameserver = f.gtld-servers.net.
com	nameserver = g.gtld-servers.net.
com	nameserver = h.gtld-servers.net.
com	nameserver = i.gtld-servers.net.
com	nameserver = j.gtld-servers.net.
com	nameserver = k.gtld-servers.net.
com	nameserver = l.gtld-servers.net.
com	nameserver = m.gtld-servers.net.
a.gtld-servers.net	internet address = 192.5.6.30
b.gtld-servers.net	internet address = 192.33.14.30
c.gtld-servers.net	internet address = 192.26.92.30
d.gtld-servers.net	internet address = 192.31.80.30
e.gtld-servers.net	internet address = 192.12.94.30
f.gtld-servers.net	internet address = 192.35.51.30
g.gtld-servers.net	internet address = 192.42.93.30
h.gtld-servers.net	internet address = 192.54.112.30
i.gtld-servers.net	internet address = 192.43.172.30
j.gtld-servers.net	internet address = 192.48.79.30
k.gtld-servers.net	internet address = 192.52.178.30
l.gtld-servers.net	internet address = 192.41.162.30
m.gtld-servers.net	internet address = 192.55.83.30
a.gtld-servers.net	has AAAA address 2001:503:a83e::2:30
b.gtld-servers.net	has AAAA address 2001:503:231d::2:30

- gtld 代表generic top level domain 通用顶级域名


```sh
> server 192.33.14.30
> set type=ns
> bilibili.com.
```
Server:		192.48.79.30
Address:	192.48.79.30#53

Non-authoritative answer:
*** Can't find bilibili.com.: No answer

Authoritative answers can be found from:
bilibili.com	nameserver = ns3.dnsv5.com.
bilibili.com	nameserver = ns4.dnsv5.com.
ns3.dnsv5.com	internet address = 1.12.0.17
ns3.dnsv5.com	internet address = 1.12.0.18
ns3.dnsv5.com	internet address = 1.12.14.17
ns3.dnsv5.com	internet address = 1.12.14.18
ns3.dnsv5.com	internet address = 101.227.168.52
ns3.dnsv5.com	internet address = 108.136.87.44
ns3.dnsv5.com	internet address = 163.177.5.52
ns3.dnsv5.com	internet address = 220.196.136.52
ns3.dnsv5.com	has AAAA address 2402:4e00:1470:2::f
ns3.dnsv5.com	internet address = 35.165.107.227
ns4.dnsv5.com	internet address = 1.12.0.16
ns4.dnsv5.com	internet address = 1.12.0.19
ns4.dnsv5.com	internet address = 1.12.14.16
ns4.dnsv5.com	internet address = 1.12.14.19
ns4.dnsv5.com	internet address = 112.80.181.152
ns4.dnsv5.com	internet address = 117.135.128.152
ns4.dnsv5.com	internet address = 124.64.205.152
ns4.dnsv5.com	internet address = 13.37.58.163
ns4.dnsv5.com	has AAAA address 2402:4e00:111:fff::8
ns4.dnsv5.com	internet address = 49.7.107.152

```sh
> server  101.227.168.52
```
Default server: 101.227.168.52
Address: 101.227.168.52#53

```sh
> set type=a
> www.bilibili.com.
```

Server:		101.227.168.52
Address:	101.227.168.52#53

www.bilibili.com	canonical name = a.w.bilicdn1.com.

- canonical name 意思为 cname，域名跳转

```sh
> a.w.bilicdn1.com.
```

Server:		183.221.253.100
Address:	183.221.253.100#53

Non-authoritative answer:
Name:	a.w.bilicdn1.com
Address: 112.45.122.107
Name:	a.w.bilicdn1.com
Address: 112.45.122.108
Name:	a.w.bilicdn1.com
Address: 112.45.122.109
Name:	a.w.bilicdn1.com
Address: 221.178.63.11
Name:	a.w.bilicdn1.com
Address: 36.158.237.15
Name:	a.w.bilicdn1.com
Address: 36.158.237.14
Name:	a.w.bilicdn1.com
Address: 36.158.237.16
Name:	a.w.bilicdn1.com
Address: 36.158.237.17
Name:	a.w.bilicdn1.com
Address: 221.178.63.10
Name:	a.w.bilicdn1.com
Address: 221.178.63.12