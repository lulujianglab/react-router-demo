import React from 'react'
import ReactDOM from 'react-dom'
//引入App.js这个组件
import App from './App'
//加快react运行速度的一个js文件
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()
