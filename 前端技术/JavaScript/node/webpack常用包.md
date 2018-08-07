## webpack在打包的过程中，往往会用到大量的插件，在此举例说明几个常用的插件。

> 每次要编译代码时，手动运行 npm run build 就会变得很麻烦。
webpack 中有几个不同的选项，可以帮助你在代码发生变化后自动编译代码：
1. webpack's Watch Mode
2. webpack-dev-server
3. webpack-dev-middleware

注意，以上三种模式都可以实现自动编译的逻辑。

-----------------------------
## webpack-dev-server
webpack提供了一个简单的web容器，可以提供我们热加载(live reloading)

-----------------------------
## webpack-dev-middleware
webpack-dev-middleware 是一个容器(wrapper)，
它可以把 webpack 处理后的文件传递给一个服务器(server)。 webpack-dev-server 在内部使用了它，
同时，它也可以作为一个单独的包来使用，以便进行更多自定义设置来实现更多的需求。

-----------------------------
## write-file-webpack-plugin
// 写bunddle文件用的插件




-----------------------------
## webpack-merge
1. 合并webpack配置信息的插件
2. 合并webpack配置信息的插件
3. 合并webpack配置信息的插件
 

-----------------------------
## browser-sync-webpack-plugin
// 浏览器同步工具（热部署你的代码） 能够在webpack中容易的使用browserSync

-----------------------------
## fork-ts-checker-webpack-plugin
// 在单独的进程上运行typescript类型检查器。

-----------------------------
## friendly-errors-webpack-plugin
// 更友善的提示webpack运行时候的错误和警告

-----------------------------
## simple-progress-webpack-plugin
// 一个简单的webpack进度条提示插件， 带有四中不同级别的日志输出支持。

-----------------------------
## webpack-notifier
// 使用node NotifierPlugin 为用户提示系统构建通知（会在windows系统上提示你）
