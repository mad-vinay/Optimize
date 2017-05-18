import React, { Component } from 'react';
import NavBar from '../../../components/native/navbar';
import TouchableOpacityBtn from '../../../components/native/opacity-btn';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  ListView
} from 'react-native';

import styles from './style';
import CaseView from '../../../components/native/case-view';
import DateSelect from '../../../components/native/date-select';
import cases from '../../../json/cases.json'


import moment from 'moment';

export default class CasesDayView extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
     dataSource: ds.cloneWithRows(cases),
    };
  }
  renderRow = (data) => {
    return (
      <CaseView caseData = {data}/>
    );
  }
  dateChange = (newDate) => {
    console.log(newDate);
  }
  render() {
    const {state} = this.props.navigation;
      return (
      <View style={styles.wrapper}>
        <NavBar styles={styles.navWrapper}>
            <TouchableOpacityBtn
                navigator={this.props.navigation}
                onPress = { this.onPress }
                screen='ManageCase'
                label="< Back"/>
            <Text style={styles.headingText} >Day View</Text>
            <TouchableOpacityBtn
                navigator={this.props.navigation}
                onPress = { this.onPress }
                screen='Login'
                label="Logout"/>
        </NavBar>
        <DateSelect
            startDate= {state.params.selectedDate.split('T')[0]}
            onDateChange = {this.dateChange}
        />
        <ListView
            dataSource = {this.state.dataSource}
            renderRow = {this.renderRow}>
        </ListView>
      </View>
      );
  }
}
