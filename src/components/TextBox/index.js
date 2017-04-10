/**
 * TextBox Component
 * TextInput is wrapped using a View
 */
import React, { Component } from 'react';
import {
    View,
    TextInput
} from 'react-native';
import styles from './style';

export default class TextBox extends Component {

  render() {
    return (
      <View style = { styles.loginform }>
        <TextInput style = {styles.form_items} placeholder={this.props.placeholder} underlineColorAndroid='transparent' placeholderTextColor="#a9a9a9" secureTextEntry={this.props.secureTextEntry}/>
      	{ this.props.children }
      </View>
    );
  }
}