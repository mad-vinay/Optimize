/**
 * Optimize App
 * https://github.com/vinayedadan/Optimize
 * author: QBurst
 */
import React, { Component } from 'react';

import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Teams from './src/views/TeamsListView';
import Login from './src/views/LoginView';
import MainCategory from './src/views/MainCategoryView';
import ManageCase from './src/views/ManageCaseView';
import Preferences from './src/views/PreferencesView';
import SetInfo from './src/views/OfficeCareView';
import AddPreference from './src/views/AddPreferenceView';
import CasesDayView from './src/views/CasesDayView';

const OptimizeApp = StackNavigator({
  Login: {screen: Login},
  ManageCase: {screen: ManageCase},
  MainCategory: {screen: MainCategory},
  Preferences: {screen: Preferences},
  SetInfo: {screen: SetInfo},
  AddPreference: {screen: AddPreference},
  Teams: {screen: Teams},
  CasesDayView: {
    screen: CasesDayView,
    params: { selectedDate: '' }
  }
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
