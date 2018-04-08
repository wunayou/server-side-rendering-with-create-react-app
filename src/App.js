import React, { Component } from 'react';
import logo from './logo.svg';
import css from './App.less';
import Router from './routers'

class App extends Component {
  render() {
    return (
      <div className={css.App}>
        <header className={css.Appheader}>
          <img src={logo} className={css.Applogo} alt="logo" />
          <h1 className={css.Apptitle}>Welcome to React</h1>
        </header>
        <p className={css.Appintro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Router/>
      </div>
    );
  }
}

export default App;
