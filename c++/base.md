# #include <>和#include ""区别

\#include <a.h>中a.h没有相对当前目录的含义，a.h这个库只需要包含在任意一个目录下即可
\#include "b"中的b有相对当前目录的含义

# 区分c++库和c库

\#include <a.h>是c标准库，c标准库有扩展名
\#include \<b> 是c++库,c++文件没有扩展名

# debug

&a 查看内存里变量a的值
