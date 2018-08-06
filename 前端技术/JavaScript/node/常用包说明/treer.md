常用的treer命令：

> 注意：目录即将生成到相对目录的tree.txt文件中，如果你已经有了这个目录，请改一个文件名称。

```text
 treer -e ./tree.txt -i "/node_modules/"                         //仅仅忽略node_modules文件夹
 treer -e ./tree.txt -i "/node_modules|dist|target|.git|.idea/"  //忽略node_modules;dist;target;.git;.idea文件夹
```
你也可以配置在package.json中。
```json
{
	"scripts":{
		"treer": "treer -e ./tree.txt -i \"(node_modules|dist|.git|.cache)\""
	}
}
```
