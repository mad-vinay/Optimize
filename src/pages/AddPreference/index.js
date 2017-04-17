import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import Container from '../../components/Container';
import TouchableOpacityBtn from '../../components/TouchableOpacityBtn';
import TextBox from '../../components/TextBox';

import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';
import styles from './style';

export default class AddPreference extends Component {
    render() {
        return (
        <View style={styles.wrapper}>
          <NavBar styles={styles.navWrapper}>
            <TouchableOpacityBtn 
              navigator={this.props.navigator}
              onPress = { this.onPress } id='MainCategory' 
              styles={styles.logoutButton} 
              label="< Back"/>
            <Text style={styles.headingText} >Add Preferences</Text>
          </NavBar>

          <Container>
            <TextBox
              inputStyle = {styles.textInputStyle }
              styles={styles.addPreferenceField} 
              placeholder='Preference Name' 
              secureTextEntry={false} 
              showClearButton={false}>
            </TextBox>

            <TextBox
              inputStyle = {styles.textInputStyle }
              styles={styles.addPreferenceField} 
              placeholder='Case Type' 
              secureTextEntry={false} 
              showClearButton={false}>
            </TextBox>

            <TextBox
              inputStyle = {styles.InputStyle }
              styles={styles.addPreferenceField} 
              placeholder='Rep Notes (not seen by office staff)' 
              secureTextEntry={false} 
              showClearButton={false}
              multiline = {true}
              numberOfLines = {4}>
            </TextBox>

          </Container>

        </View>
        );
    }
}