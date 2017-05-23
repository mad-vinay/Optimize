import React, { Component } from 'react';
import NavBar from '../../../components/native/navbar';
import Container from '../../../components/native/wrapper';
import TouchableOpacityBtn from '../../../components/native/opacity-btn';
import TextBox from '../../../components/native/textbox';
import Ticker from '../../../components/native/ticker';
import { View, Text,
  TextInput,
} from 'react-native';
import styles from './style';

export default class AddPreference extends Component {
    render() {
        return (
        <View style={styles.wrapper}>
          <NavBar styles={styles.navWrapper}>
            <TouchableOpacityBtn
               navigator={this.props.navigation} screen='MainCategory'
              onPress = { this.onPress }
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
              imageStyle = {styles.imageStyle}
              showClearButton={false}>
            </TextBox>

            <TextBox
              imageStyle = {styles.imageStyle}
              inputStyle = {styles.InputStyle }
              styles={styles.addPreferenceField}
              placeholder='Rep Notes (not seen by office staff)'
              secureTextEntry={false}
              showClearButton={true}
              multiline = {true}
              numberOfLines = {4}>
            </TextBox>

            <TextBox
              imageStyle = {styles.imageStyle}
              inputStyle = {styles.InputStyle }
              styles={styles.addPreferenceField}
              placeholder='office Notes'
              secureTextEntry={false}
              showClearButton={true}
              multiline = {true}
              numberOfLines = {4}>
            </TextBox>

          </Container>

        </View>
        );
    }
}