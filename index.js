/**
 * Optimize App Entry for Web
 * https://github.com/vinayedadan/Optimize
 * author: QBurst
**/
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import Login from './src/views/shared/LoginView';
import Teams from './src/views/shared/TeamsListView';

ReactDOM.render(
  <Router>
    <div>
     <Route exact path="/" component={Login} />
     <Route path="/teams" component={Teams}/>
    </div>
  </Router> , document.getElementById('content'));

