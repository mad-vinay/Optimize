import React, { Component } from 'react';
import {
	StyleSheet,
	AppRegistry,
	Navigator
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import Login from './src/pages/Login';
import MainCategory from './src/pages/MainCategory';
import ManageCase from './src/pages/ManageCase';
import Preferences from './src/pages/Preferences';
import SetInfo from './src/pages/SetInfo';
import AddPreference from './src/pages/AddPreference';

const OptimizeApp = StackNavigator({
  Login: {screen: Login},
  ManageCase: {screen: ManageCase},
  MainCategory: {screen: MainCategory},
  Preferences: {screen: Preferences},
  SetInfo: {screen: SetInfo},
  AddPreference: {screen: AddPreference}
},
{
  initialRouteName: 'Login',
  headerMode: 'none'
});

export default class Optimize extends Component {
  render() {
    return (
      <OptimizeApp/>
    );
  }
}

AppRegistry.registerComponent('Optimize', () => Optimize);

