/**
 * Optimize App
 * https://github.com/vinayedadan/Optimize
 * author: QBurst
 */
import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';

import Login from './src/views/LoginView';
import MainCategory from './src/views/MainCategoryView';
import ManageCase from './src/views/ManageCaseView';
import Preferences from './src/views/PreferencesView';
import SetInfo from './src/views/SetInfoView';
import AddPreference from './src/views/AddPreferenceView';

export default class Optimize extends Component {

  render() {
    return (
      <Navigator initialRoute   = {{ id: 'Login', name: 'Login' }}
                 renderScene    = {this.renderScene.bind(this)}
                 configureScene = {(route, routeStack) => Navigator.SceneConfigs.FloatFromRight}/>
    );
  }

  renderScene = ( route, navigator ) => {
    if ( route.id === 'Login' ) {
      return ( <Login navigator={navigator}/> );
    }
    else if ( route.id === 'ManageCase' ) {
      return ( <ManageCase navigator={navigator}/> );
    }
    else if ( route.id === 'MainCategory' ) {
      return ( <MainCategory navigator={navigator}/> );
    }
    else if (route.id === 'Preferences') {
      return ( <Preferences navigator={navigator}/> );
    }
    else if (route.id === 'SetInfo') {
      return ( <SetInfo navigator={navigator}/> );
    }
    else if ( route.id === 'AddPreference' ) {
      return ( <AddPreference navigator={navigator}/> );
    }
  }
}

AppRegistry.registerComponent('Optimize', () => Optimize);
