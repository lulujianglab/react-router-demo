#  react 路由

在单页面应用中，页面级UI组件的展示和切换完全由路由控制，每一个路由都有对应的URL及路由信息，我们可以通过路由统一高效的管理我们的组件切换，保持UI与URL同步，保证应用的稳定性及友好体验

React Router是完整的React 路由解决方案，也是开发React应用最常使用的路由管理库，它提供简单的API，以声明式方式实现强大的路由功能，诸如按需加载，动态路由等

* 声明式：语法简洁，清晰
* 按需加载：延迟加载，根据使用需要判断是否需要加载
* 动态路由：动态组合应用路由结构，更灵活，更符合组件化开发模式

# react-router 的配置：

[react-router ](https://github.com/ReactTraining/react-router)可以让根组件动态的去挂载不同的其他组件（比如本 demo 中的首页组件、新闻组件、商品组件），根据用户访问的地址动态加载不同的组件

1. 找到[官方文档](https://reacttraining.com/react-router/web/example/basic)：https://reacttraining.com/react-router/web/example/basic

2. 要配置路由，首先得引入 `react-router-dom` 模块

```sh
npm install react-router-dom --save
```

3. 找到项目的根组件引入react-router-dom

```js
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
```

4. 复制官网文档根组件里面的内容进行修改（加载的组件要提前引入）；在根组件里边配置路由，用`<Router></Router>`包裹起来；使用 `<Link to=''>` 实现路由的切换，也就是页面的跳转


```js
<Router>
  <Link to="/">首页</Link>
  <Link to="/news">新闻</Link>
  <Link to="/product">商品</Link>

  <Route exact path="/" component={Home} />
  <Route path="/news" component={News} />    
  <Route path="/product" component={Product} />   
</Router>
```

注意：**exact 表示严格匹配**

# 页面传值

一个页面跳转到另一个页面进行传值：

1. get 传值
2. 动态路由
3. localStorage

这里主要用到的是动态路由和 get 传值

## react 动态路由传值

比如一个页面列表 list 点击不同 item 跳转到不同详情页，需要把 item 的值传入到详情页，这个时候就需要用到动态路由

1. 动态路由配置

`<Route path="/content/:aid" component={Content} />`

2. 对应的动态路由加载的组件里面获取传值

`this.props.match.params`

跳转：`<Link to={`/content/${value.aid}`}>{value.title}</Link>`

具体可以参考 New.js 组件到 Content.js 组件的传值方式

## react get传值  

1. 路由配置成静态即可

`<Route path="/productcontent" component={ProductContent} />`

2. 获取 `this.props.location.search` ，可以通过 `url`模块解析出来，使用[ url 模块](https://www.npmjs.com/package/url)需要安装 url 模块

`cnpm install url --save`

具体可以参考 Product.js组件 到 ProductContent.js 组件的传值方式

## react-router-nesting 为路由模块化、以及嵌套路由父子组件传值 demo
