---
title: WSL入门
index: false

dir:
  order: 1
category:
  - 教程
---

# 参考文档

[windows官方文档](https://learn.microsoft.com/zh-cn/windows/wsl/)
[配置Hyper-v](https://learn.microsoft.com/zh-cn/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v)

# 安装问题

执行wsl 命令都返回 help列表

执行 wsl -l -o 
返回错误: 0x80072ee7

基本上是因为网络问题，
这时我们可以使用windows store 进行安装，安装子系统之后就好了
