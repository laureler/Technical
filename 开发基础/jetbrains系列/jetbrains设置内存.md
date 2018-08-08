## 设置intellij、webstorm、phpstorm一系列jetbrains软件的内存。
> 这里以 intellij idea为例，其他软件同理。

## 为什么要设置内存？
如果intellij内存不足，会频繁的访问电脑硬盘，造成性能瓶颈。

## 怎么设置？
找到intellij的文件位置，我们可以看到idea两个启动程序，分别是idea.exe;idea64.exe;

一般来说，我们使用的都是64位，当然不排除你可能默认使用了32位。
1. 32位就修改idea.exe.vmoptions
2. 64位就修改idea64.exe.vmoptions

|参数|参数描述|建议|
| :--- | :--- | :--- |
|-Xms512m  |  设置IDEA初时的内存大小，提高Java程序的启动速度。 | 无|  
|-Xmx2048m  |  设置IDEA最大内存数，提高该值，可以减少内存Garage收集的频率，提高程序性能。| 无|  
|-XX:ReservedCodeCacheSize=480m	  |  保留代码占用的内存容量。| 无|  


	
	
