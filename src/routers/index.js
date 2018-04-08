import React from 'react'
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import aa from './a'
import bb from './b'
import cc from './c'
import dd from './d'
// const aa = Loadable({
//     loader: () => import('./a'),
//     loading: <div>loading...</div>,
// })
// const bb = Loadable({
//     loader: () => import('./b'),
//     loading: <div>loading...</div>,
// })
// const cc = Loadable({
//     loader: () => import('./c'),
//     loading: <div>loading...</div>,
// })
// const dd = Loadable({
//     loader: () => import('./d'),
//     loading: <div>loading...</div>,
// })


const BasicExample = () => (
    <Router>
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
            <Link to="/dd">Topics</Link>
          </li>
        </ul>
  
        <hr />
        <Route exact path="/" component={aa} />
        <Route path="/bb" component={bb} />
        <Route path="/cc" component={cc} />
        <Route path="/dd" component={dd} />
      </div>
    </Router>
  );

  export default BasicExample;