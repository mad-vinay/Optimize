import React, { Component } from 'react';
import {
	StyleSheet,
	AppRegistry,
	Navigator
} from 'react-native';
 
import Login from './src/pages/Login';
import MainCategory from './src/pages/MainCategory';
 
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
    } else if (route.id === 'MainCategory') {
      return (
        <MainCategory navigator={navigator}/>
      );
    }
  }
}
 
AppRegistry.registerComponent('Optimize', () => Optimize);
