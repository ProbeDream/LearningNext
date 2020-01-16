### create-next-app 脚手架

我们使用 zeit 公司提供的 next 服务端渲染的框架开发 SSR 应用,使用**create-next-app**构建非常的简便,接下来介绍一下对应的基于脚手架构建出来的项目的基本结构:

1. component:专门用来存在对应的组件的,但是该组件一般指专门用途的组建
2. node_modules:依赖文件包夹
3. pages:放置页面文件的文件夹 自动生成路由并且在服务器端渲染与此同时渲染好之后进行数据的同步操作!
4. static:静态的资源文件夹
5. .gitignore:git 的忽略文件夹!
6. package.json:该项目的配置信息 包裹依赖 脚本 以及对应的项目描述等等!

### 新建页面和访问路径以及 component 相关的组件编写!

其实对应的不同的几个点是值得我们深究的:

1. component:作为组件被应用到不同的路由中去! 看代码:
   `/components/pbutton`

```js
export default ({ children }) => <button>{children}</button>;
```

`/pages/index.js`

```js
import React from 'react';
import PButton from '../components/pbutton';
const Home = () => (
  <div>
    <PButton>ProbeDream</PButton>
  </div>
);
export default Home;
```

对应的 PButton 组件被应用到了 Home 中,我们通过**localhost:3000** 就可以看到 内容为 ProbeDream 的按钮了!

2. pages:路由 通过不同的 url 地址访问!
   `/pages/probedream.js`

```js
const probedream = () => <div>Probedream!</div>;
export default probedream;
```

上面的代码是被定义在 pages 文件夹下面的! 我们是通过**localhost:3000/probedream**进行访问并且显示对应的 probedream 字样的!

### 路由 基础和基本跳转

对应的每个框架之间的路由体系是不同的,我们只是对 next 的路由做简单的了解,在 next 中实现路由的方式:

1. 使用 Link 标签
   `/pages/page1.js`

```js
import Link from 'next/link';
const page1 = () => (
  <div>
    <div>ProbeDream1</div>
    <Link href="/">
      <a>返回首页</a>
    </Link>
  </div>
);
export default page1;
```

`/pages/page1.js`

```js
import Link from 'next/link';
const page2 = () => (
  <div>
    <div>ProbeDream2</div>
    <Link href="/">
      <a>返回首页</a>
    </Link>
  </div>
);
export default page2;
```

```js
import React from 'react';
import Link from 'next/link';
import Title from '../components/title';

const Home = () => (
  <div>
    <Title>ProbeDream</Title>
    <div>
      <Link href="/page1">
        <a>go to page1!</a>
      </Link>
    </div>
    <div>
      <Link href="/page2">
        <a>go to page2!</a>
      </Link>
    </div>
  </div>
);

export default Home;
```

对应的不支持兄弟标签并列的情况:

```js
import React from 'React';
import Link from 'next/link';

const Home = () => (
  <div>
    <Link>
      <span>1</span>
      <span>2</span>
    </Link>
  </div>
);

export default Home;
```

2. 使用 js 编程的方式进行跳转,所谓的就是使用 **Router 组件**
   通过 Router 组件进行实现

```js
import React from 'React';
import Router from 'next/router';

const Home = () => {
  const goA = () => {
    Router.push('/page1');
  };

  const goB = () => {
    Router.push('/page2');
  };
  return (
    <div>
      /*{' '}
      <button
        onClick={() => {
          Router.push('/page1');
        }}
      >
        去page1
      </button>{' '}
      */
      <button onClick={goA}>去page1</button>
      <button onClick={goA}>去page2</button>
    </div>
  );
};
```

### 查询参数的处理

如果说是关于参数的接收就需要使用到 query 传递参数:

```js
const url = '/home?key=value';
```

对应的引入的 widthRouter 是一个高阶函数,对查询字符串的处理的!

```js
import { withRouter } from 'next/router';
import Link from 'next/link';

const page3 = ({ router }) => (
  <div>
    <div>{router.query.name} 你好!很高兴见到你!</div>
    <Link href="/">go home!</Link>
  </div>
);
export default withRouter(page3);
```

```js
<Link href="/page3?name=小p">
  <a>他是小p</a>
</Link>
```

对应的 pages 里面的页面会对查询字符串进行处理操作!

如果说是 js 编程的方式传递参数:

```js
const gotoPage4 = () => {
  Router.push({
    pathname: 'routername',
    query: {
      key: 'value'
    }
  });
};

const gotoPage5 = () => {
  Router.push('/routername?name=value');
};
/* 标签传递的方式 */
<Link href={{ pathname: 'routername', query: { name: 'value' } }}>
  <a>content</a>
</Link>;
```

### 对应的 next 中[路由的钩子函数](https://nextjs.org/docs/api-reference/next/router)

1. routeChangeStart 路由发生变化的时候
2. routeChangeComplete 路由结束变化时候
3. beforeHistoryChange 浏览器 history 触发前
4. routeChangeError 路由器跳转发生错误时

对应的还有两种时间都是针对于 hash 模式的,如下所示:

- hashChangeStart
- hashChangeComplete

### 应用

一般都是通过 Router.events.on 的方式:

```js
Router.events.on('eventName', (...args) => {
  //TODO
});
```

### 使用 getInitialProps 中使用 Axios 获取远程数据

Next.js 通过提供了 getInitialProps 的方式获取远端数据,并且是该框架的约定,因此只能够通过该方法来获取数据! **因此也就没有必要在生命周期函数中获取!** 虽然说可以在 React 的生命周期函数 componentDidMount 中使用但是使用了 next 就必须准守约定!

那么既然需要配置网络请求库 Axios 的使用,那么对应的就需要安装对应的 Axios 的依赖:

```bash
  yarn add Axios
```

```bash
  我们根据提供的API接口:https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList 对该接口进行请求操作!
```

代码如下所示:
`/getPage6.js`

```js
import Axios from 'axios';
const requestURL =
  'https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList';
page6.getInitialProps = async () => {
  const promise = new Promise(resolve => {
    Axios(requestURL).then(response => {
      /* 对应的结果:console.log(`响应的结果为:${response}`); */
      resolve(response.data.data);
    });
  });
  /* 拿到的是一个解析promise对象之后的数据! */
  return await promise;
};
```

但是对应的仅仅只是拿到数据的同时是远远不够的,我们还要通过将对应的数据渲染出来才行!

```js
import { withRouter } from 'next/router';
import Link from 'next/link';
const page6 = ({ router, list }) => (
  <div>
    <div>
      Hello {router.query.name} 获取到的数据为:{list}
    </div>
    <br />
    {list}
  </div>
);

export default withRouter(page6);
```

### style jsx 的使用

主要的功能还是样式的编写,所有的样式都需要用花括号包裹!详情看代码:

```js
const page7 = () => (
  <div>
    <span>Hello ProbeDream This about pages Collection page7!</span>
    <style jsx>
      {`
        span {
          color: red;
        }
      `}
    </style>
  </div>
);
export default page7;
```

并且对应的 style jsx 是随机添加类名的并且不会污染全局变量名!

对应的如果说是动态切换效果的话,可以这样做:

```js
import { useState } from 'react';
const page9 = () => {
  const [color, setColor] = useState('blue');
  return (
    <div>
      <span>Hello ProbeDream!</span>
      <button
        onClick={() => {
          setColor(color === 'blue' ? 'read' : 'blue');
        }}
      >
        Switch to Color!
      </button>
      <style jsx>
        {`
          span {
            color: ${color};
          }
        `}
      </style>
    </div>
  );
};

export default page9;
```

### next 中的懒加载

比如说我们想显示对应的时间,就需要用到对应的组件`moment`因此常用的方法如下所示:

```js
import React, { useState } from 'react';
import moment from 'moment';

const Time = () => {
  const [nowTime, setTime] = useState(Date.now());
  const changeTime = () => {
    setTime(moment(Date.now()).format());
  };
  return (
    <div>
      <div>现在的时间为:{nowTime}</div>
      <button onClick={changeTime}>Click Change Time!</button>
    </div>
  );
};

export default Time;
```

对应的看上去的代码看起来非常清晰,也就是说半数的页面用到了对应的 moment 库,它就会以公共库的形式进行打包发布,**就算是有的页面没有使用 moment 库也会进行加载!** 对应的这样的情况下就是浪费了!

我们我们就需要使用到对应的技术 **懒加载(lazy loading)** 就非常重要了,话不多说上代码:

```js
import React, { useState } from 'react';
const Time = () => {
  const [time, setTime] = useState(Date.now());
  const changeTime = async () => {
    const moment = await import('moment');
    setTime(moment.default(Date.now()).format());
  };
  return (
    <div>
      <div>现在时间为:{nowTime}</div>
      <button onClick={changeTime}> Click Change Time!</button>
    </div>
  );
};
```

对应的懒加载模块就是这样的!
如果说是懒加载自定义的组件那么应该如何做呢?

1. 定义对应的自定义组件:Customer

```js
export default () => <div>This is Customer Component!</div>;
```

2. 通过对应的 next/dynamic 来做懒加载!

```js
import dynamic from 'next/dynamic';
const componentPathName = '../components/customer';
const Customer = dynamic(import(componentPathName));
const Home = () => (
  <div>
    <span>下面是加载的自定义的组件</span>
    <Customer />
  </div>
);
```

### 更好地 SEO 支持操作

对应的我们应该做的是对 head 的使用和对 next 提供的 head 做二次封装操作!

```js
import Head from 'next/head';

const Header = () => (
  <div>
    <Head>
      <title>This is about ProbeDream Website!</title>
      <meta charset="utf-8" />
    </Head>
  </div>
);

export default Header;
```

对应的为了更加方便的使用直接作为组件应用到不同的页面中即可!

### Next 下支持 AntDesign

1. 安装对应的依赖 Antd 和 @zeit/next-css

- antd:React 组件库
- @zeit/next-css:next 支持 css 的依赖

安装好之后我们在对应的 next.config.js 中配置对应的信息,如下所示:

```js
const withCSS = require('@zeit/next-css');
if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {};
}

module.exports = withCSS({});
```
这是对CSS的支持!

接下来处理antd中的按需加载的问题了! 对应的安装插件: **babel-plugin-import** 之后通过对应的 **.babelrc** 配置对应的按需加载功能!
```babelrc
  {
    "presets":["next/babel"],
    "plugins":[
      [
        "import",{
          "libraryName":"antd","style":"css"
        }
      ]
    ]
  }
```

### 生产环境打包问题
如果只是单纯的使用打包使用对应的 next build是没有问题的,**如果说引入了ant design** 那么对应的就会出现问题:
因此我们可以通过 `_app.js` 全局引入css解决该问题:
```js
import App from "next/app";

import "antd/dist/antd.css";

export default  App;

```
