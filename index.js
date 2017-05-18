/**
 * Optimize App Entry for Web
 * https://github.com/vinayedadan/Optimize
 * author: QBurst
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import Login from './src/views/shared/LoginView';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Login} />
  </Router> , document.getElementById('content'));
