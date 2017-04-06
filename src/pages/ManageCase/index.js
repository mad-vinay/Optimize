import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
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
              <Button navigator={this.props.navigator} onPress = { this.onPress } id='Login'  textColor='#ff9f02' styles={styles.logoutButton} label="< Back"/>
              <Button navigator={this.props.navigator} onPress = { this.onPress } id='Login'  textColor='#ff9f02' styles={styles.logoutButton} label="Logout"/>
          </NavBar>
          <Calender/>
        </View>
        );
    }
}