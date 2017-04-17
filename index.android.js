import React, { Component } from 'react';
import {
	StyleSheet,
	AppRegistry,
	Navigator
} from 'react-native';

import Login from './src/pages/Login';
import MainCategory from './src/pages/MainCategory';
import ManageCase from './src/pages/ManageCase';
import Preferences from './src/pages/Preferences';
import SetInfo from './src/pages/SetInfo';
import AddPreference from './src/pages/AddPreference';
export default class Optimize extends Component {

render() {

    return (
      <Navigator
        initialRoute={{ id: 'Login', name: 'Login' }}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromRight}
      />
    );
  }
  renderScene = (route, navigator) => {
    if (route.id === 'Login') {
      return (
        <Login navigator={navigator}/>
      );
    }
    else if (route.id === 'ManageCase') {
      return (
        <ManageCase navigator={navigator}/>
      );
    }
    else if (route.id === 'MainCategory') {
      return (
        <MainCategory navigator={navigator}/>
      );
    }
    else if (route.id === 'Preferences') {
      return (
        <Preferences navigator={navigator}/>
      );
    }
    else if (route.id === 'SetInfo') {
      return (
        <SetInfo navigator={navigator}/>
      );
    }
    else if (route.id === 'AddPreference') {
      return (
        <AddPreference navigator={navigator}/>
      );
    }
  }
}

AppRegistry.registerComponent('Optimize', () => Optimize);
