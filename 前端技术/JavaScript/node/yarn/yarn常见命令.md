yarn 常见命令

yarn global
首先，yarn 的全局安装并不是加 -g 或者 --global 这样的参数，它使用 yarn global 命令。
用 yarn global --help 可以看到子命令列表

Usage:`yarn global [add|bin|ls|remove|upgrade]  [flags]`

```text
	yarn global add somelib     //增加一个lib
	yarn global remove somelib  //移除一个lib
	yarn global bin somelib     //查看yarn bin 目录的位置
	yarn global list somelib    //查看所有全局lib
	yarn global upgrade somelib //更新lib到最新的版本
	yarn global upgrade-interactive  //类似于升级命令，但在执行任何升级之前显示所有历史包，允许用户选择要升级的包。
```

