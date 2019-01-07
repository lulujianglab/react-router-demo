# 路由模块化、以及嵌套路由父子组件传值demo

顶部和右侧分别有一级路由和二级路由，只改变右侧的内容

注意：4.x `react-router` 嵌套路由模块化的一个固定写法

```js
<Route key={key} exact path={route.path}                     
  render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes} />
  )}
/>
```

`route.component` 是指第一级路由组件 

`routes={route.routes}` 是将二级路由传给一级路由组件
