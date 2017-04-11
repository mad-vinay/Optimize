/**
 * TextBox Component
 * TextInput is wrapped using a View
 */
import React, { Component } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import styles from './style';

export default class TextBox extends Component {

  clearText() {
    this.refs['textInput'].setNativeProps({text: ''});
  }


  render() {
    return (
      <View style = { styles.loginform }>
        <TextInput 
          style = {styles.form_items} 
          placeholder={this.props.placeholder} 
          underlineColorAndroid='transparent' 
          placeholderTextColor="#a9a9a9"
          secureTextEntry={this.props.secureTextEntry}
          ref={'textInput'}/>
            { this.props.showClearButton && 
              <TouchableOpacity style={styles.clearBtn} onPress={() => this.clearText()}>
                <Image style={styles.clearIcon} source={require('../../images/clear-icon.png')}/>
              </TouchableOpacity>}
      </View>
    );
  }
}

