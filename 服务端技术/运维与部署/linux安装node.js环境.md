# node.js

## 如何在linux安装node.js（同时配置环境变量）
1. 下载node.js的代码并且解压缩运行node.js的方法，
	1. 解压缩下载的tar.gz文件 tar -xvf node.tar.gz
	2. 配置环境变量（本种方法很复杂，一个是需要复杂的命令以及软连接或者配置环境变量）
2. 安装nvm
	1. curl https://raw.github.com/creationix/nvm/master/install.sh | sh
	2. $ wget -qO- https://raw.github.com/creationix/nvm/master/install.sh | sh
	3. 上述两个你可以使用任意一个安装nvm，nvm安装之后就可以使用nvm --version查看结果
	4. 执行 nvm install stable即可

## 为什么最佳实践是nvm?
1. nvm简单，不需要配置环境变量（linux配置环境变量需要vim基础，甚至于有的人可能都不知道怎么保存退出）
2. nvm安装之后不需要配置环境变量，即可使用全局安装以及局部安装等命令