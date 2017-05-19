/**
 * Optimize App Entry for Android
 * https://github.com/vinayedadan/Optimize
 * author: QBurst
**/
import React, { Component } from 'react';

import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Teams from './src/views/native/TeamsListView';
import Login from './src/views/shared/LoginView';
import MainCategory from './src/views/native/MainCategoryView';
import ManageCase from './src/views/native/ManageCaseView';
import Preferences from './src/views/native/PreferencesView';
import SetInfo from './src/views/native/SetInfoView';
import AddPreference from './src/views/native/AddPreferenceView';
import OfficeSets from './src/views/native/OfficeSetsView';
import CasesDayView from './src/views/native/CasesDayView';

const OptimizeApp = StackNavigator({
    Login: { screen: Login },
    ManageCase: { screen: ManageCase },
    MainCategory: { screen: MainCategory },
    Preferences: { screen: Preferences },
    SetInfo: { screen: SetInfo },
    AddPreference: { screen: AddPreference },
    OfficeSets: { screen: OfficeSets },
    Teams: { screen: Teams },
    CasesDayView: { screen: CasesDayView}
}, {
    initialRouteName: 'Teams',
    headerMode: 'none'
});

export default class Optimize extends Component {
    render() {
        return ( < OptimizeApp / > );
    }

}

AppRegistry.registerComponent('Optimize', () => Optimize);
