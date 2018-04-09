import React from 'react'
import Loadable from 'react-loadable';
import { BrowserRouter, Route, Link } from "react-router-dom";
import LoadingComponent from '../loading'  // 这原来也是需要一个组件 那一些写教程  只想说一句 操你妹。。。

// https://blog.csdn.net/beijiyang999/article/details/78591398  这里体验真的好，因为还有一个延迟显示
// import aa from './a'
// import bb from './b'
// import cc from './c'
// import dd from './d'
const aa = Loadable({
    loader: () => import('./a'),
    loading: LoadingComponent,
})
const bb = Loadable({
    loader: () => import('./b'),
    loading: LoadingComponent,
})
const cc = Loadable({
    loader: () => import('./c'),
    loading: LoadingComponent,
})
const dd = Loadable({
    loader: () => import('./d'),
    loading: LoadingComponent,
})
const BasicExample = () => (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/bb">About</Link>
          </li>
          <li>
            <Link to="/cc">Topics</Link>
          </li>
          <li>
            <Link to="/dd">dddd</Link>
          </li>
        </ul>
  
        <hr />
        <Route exact path="/" component={aa} />
        <Route path="/bb" component={bb} />
        <Route path="/cc" component={cc} />
        <Route path="/dd" component={dd} />
      </div>
    </BrowserRouter>
  );

  export default BasicExample;