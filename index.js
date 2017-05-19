import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import Login from './src/views/shared/LoginView';
import Teams from './src/views/shared/TeamsListView';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Teams} />
  </Router> , document.getElementById('content'));