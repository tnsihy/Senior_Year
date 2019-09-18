## 安装Element-UI

> 关于主题颜色  

我采用的是 假如项目没有使用SCSS的方式，即利用命令行来改变主题颜色。  
安装工具:  
`npm i element-theme -g`   
`npm i element-theme-chalk -D`  
初始化文件：  
`et -i` 之后会生成一个`variables.scss`文件，可以修改其中的主题颜色。  
当然需要在`main.js`引入样式，默认是`import '../theme/index.css'`，需屏蔽掉之前的样式。    
然后 使用命令行`et`进行编译 会自动重新运行该项目 完成后主题颜色被修改。  

> 关于内置过渡动画 Transition.vue

> 关于布局 Layout.vue
例如`<el-col>标签`可以用.el-col写样式

> 关于布局容器 Container.vue
