import React, { Component } from 'react';
import NavBar from '../../../components/native/navbar';
import TouchableOpacityBtn from '../../../components/native/opacity-btn';
import Calender from '../../../components/native/calender';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import styles from './style';

export default class ManageCase extends Component {
  dateSelect = (date) => {
    this.props.navigation.navigate('CasesDayView', {selectedDate:date});
  }
    render() {
        return (
        <View style={styles.wrapper}>
          <NavBar styles={styles.navWrapper}>
              <TouchableOpacityBtn
                  navigator={this.props.navigation}
                  onPress = { this.onPress }
                  screen='Teams'
                  label="< Back"/>
              <Text style={styles.headingText} >Manage Case</Text>
              <TouchableOpacityBtn
                navigator={this.props.navigation}
                onPress = { this.onPress }
                screen='Login'
                label="Logout"/>
          </NavBar>
          <Calender
              navigator={this.props.navigation}
              screen='Login'
              dateSelect = {this.dateSelect} />
        </View>
        );
    }
}
