
使用css modules
使用Less

其中几个关键的地方在于：

target: 'node' 指明构建出的代码是要运行在node环境里
libraryTarget: 'commonjs2' 指明输出的代码要是commonjs规范
{test: /\.(scss|css|pdf)$/,loader: 'ignore-loader'} 是为了防止不能在node里执行服务端渲染也用不上的文件被打包进去。

我们这个项目CSS 全部提出来了