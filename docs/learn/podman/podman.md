---
title: podman使用
index: false

dir:
  order: 1
category:
  - 教程
---

# 安装后命令
### 错误排查
执行podman machine init 报错：vm already exists
需要先执行rm的命令，移除配置文件，然后后再进行init
```sh
PS C:\Users\liuwenfei> podman machine rm

The following files will be deleted:

C:\Users\liuwenfei\.ssh\podman-machine-default
C:\Users\liuwenfei\.ssh\podman-machine-default.pub
C:\Users\liuwenfei\.local\share\containers\podman\machine\wsl\podman-machine-default_fedora-podman-amd64-v39.0.60.tar
C:\Users\liuwenfei\.config\containers\podman\machine\wsl\podman-machine-default.json
C:\Users\liuwenfei\.local\share\containers\podman\machine\wsl\wsldist\podman-machine-default
```
### 执行init
```sh
PS C:\Users\liuwenfei> podman machine init
Extracting compressed file: podman-machine-default_fedora-podman-amd64-v39.0.60.tar: done
Importing operating system into WSL (this may take a few minutes on a new WSL install)...
正在导入，这可能需要几分钟时间。
操作成功完成。
^XConfiguring system...
Generating public/private ed25519 key pair.
Your identification has been saved in podman-machine-default
Your public key has been saved in podman-machine-default.pub
The key fingerprint is:
SHA256:iwU+Geq2nQzVfpkFglOmXDJIJ2723GLB5VowgnL2obE root@DESKTOP-VD91CTK
The key's randomart image is:
+--[ED25519 256]--+
|   o+.* =        |
|. =.o* &         |
| + =+.X + .      |
|  Eo.= @ . .     |
|    . @ S   .    |
|   . o * . +     |
|    + . o +      |
|   . = . .       |
|    . +          |
+----[SHA256]-----+
Machine init complete
To start your machine run:

        podman machine start

```
### 执行start
```sh
PS C:\Users\liuwenfei> podman machine start
Starting machine "podman-machine-default"

```