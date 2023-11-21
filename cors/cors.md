# 简单请求

1. 请求方法是 GET、HEAD、POST 之一
2. 请求头字段符合 cors 规范
3. 请求中的 Content-Type 字段的类型是以下几种之一：
   application/x-www-form-urlencoded
   multipart/form-data
   text/plain

# 预检请求

浏览器发起

1. 请求方法是 PUT、DELETE、CONNECT、OPTIONS、TRACE 之一
2. 请求头信息至少包含以下几种字段：
   Origin
   Access-Control-Request-Method
   Access-Control-Request-Headers
3. 请求中的 Access-Control-Request-Method 字段是必需的，且不能为 \*
4. 请求中的 Access-Control-Request-Headers 字段是一个逗号分隔的字符串，其中包含一个或多个字头，这些字头需要进行 CORS 预检请求时包含在请求中

服务器响应头携带服务器校验规则，浏览器根据规则判断请求资源是否放行

5. 预检请求的响应头中有 Access-Control-Allow-Origin 字段，通配符 \* 表示可以来自任何源
6. 预检请求的响应头中有 Access-Control-Allow-Methods 字段，通配符 \* 表示可以发起任何方法
7. 预检请求的响应头中有 Access-Control-Allow-Headers 字段，通配符 \* 表示可以传递任何自定义请求头
8. 预检请求的响应头中有 Access-Control-Max-Age 字段，为 0 表示不缓存
