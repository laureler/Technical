在最新的jetbrains中，从2018.2版本开始，图标有一次大的变化，右上角的菜单
![2018.2图标示例](https://upload-images.jianshu.io/upload_images/6153330-8fb89560485ac127.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![2018.1图标示例](https://upload-images.jianshu.io/upload_images/6153330-70ed830c21b97c4b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

可以看到，图标不仅仅有变化，熟悉的update+push组合变成了 update+commit组合。
有的同学不习惯新的变化，可以在此修改：

> file>settings>Apperance & Behavior>Menus and Toolbars

在右侧的内容区域，找到Navigation Bar Toolbar内部找到
> NavBarVcsGroup>VcsNavBarToobarActions

可以看到：
![添加version control system内指令](https://upload-images.jianshu.io/upload_images/6153330-4219e7ec990ff144.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

我们在version control system折叠选项中，寻找（应该是在最下面）push指令，添加到对应的分组中即可。
![image.png](https://upload-images.jianshu.io/upload_images/6153330-5eeae0450e72c673.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

选中之后，就会出现和我一样的push图标。
