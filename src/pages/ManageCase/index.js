import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import TouchableOpacityBtn from '../../components/TouchableOpacityBtn';
import Calender from '../../components/Calender';
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
    render() {
        return (
        <View style={styles.wrapper}>
          <NavBar styles={styles.navWrapper}>
              <TouchableOpacityBtn navigator={this.props.navigator} onPress = { this.onPress } id='MainCategory' label="< Back"/>
              <Text style={styles.headingText} >Manage Case</Text>
              <TouchableOpacityBtn navigator={this.props.navigator} onPress = { this.onPress } id='Login' label="Logout"/>
          </NavBar>
          <Calender/>
        </View>
        );
    }
}