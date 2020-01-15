### create-next-app脚手架
我们使用zeit公司提供的next服务端渲染的框架开发SSR应用,使用**create-next-app**构建非常的简便,接下来介绍一下对应的基于脚手架构建出来的项目的基本结构:

1. component:专门用来存在对应的组件的,但是该组件一般指专门用途的组建
2. node_modules:依赖文件包夹
3. pages:放置页面文件的文件夹 自动生成路由并且在服务器端渲染与此同时渲染好之后进行数据的同步操作!
4. static:静态的资源文件夹
5. .gitignore:git的忽略文件夹!
6. package.json:该项目的配置信息 包裹依赖 脚本 以及对应的项目描述等等!

### 新建页面和访问路径以及component相关的组件编写!
其实对应的不同的几个点是值得我们深究的:
1. component:作为组件被应用到不同的路由中去! 看代码:
`/components/pbutton`
```js
export default ({children})=><button>{children}</button>
```
`/pages/index.js`
```js
import React from 'react'
import PButton from '../components/pbutton'
const Home = () => (
  <div>
     <PButton>ProbeDream</PButton> 
  </div>
)
export default Home;
```
对应的PButton组件被应用到了Home中,我们通过**localhost:3000** 就可以看到 内容为 ProbeDream的按钮了!


2. pages:路由 通过不同的url地址访问!
`/pages/probedream.js`
```js
const probedream = ()=>(<div>Probedream!</div>)
export default probedream;
```
上面的代码是被定义在pages文件夹下面的! 我们是通过**localhost:3000/probedream**进行访问并且显示对应的 probedream字样的!

### 路由 基础和基本跳转
对应的每个框架之间的路由体系是不同的,我们只是对next的路由做简单的了解,在next中实现路由的方式:
1. 使用Link标签
`/pages/page1.js`
```js
import Link from "next/link";
const page1 = ()=>(
<div>
    <div>ProbeDream1</div>
    <Link href="/"><a>返回首页</a></Link>
</div>
) 
export default page1;
```

`/pages/page1.js`
```js
import Link from "next/link";
const page2 = ()=>(
<div>
    <div>ProbeDream2</div>
    <Link href="/"><a>返回首页</a></Link>
</div>
) 
export default page2;
```



2. 使用js编程的方式进行跳转,所谓的就是使用 **Router组件**

