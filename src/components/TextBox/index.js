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
      <View style={[ this.props.noDefaultStyles ? '' : styles.loginform,
                    this.props.styles ? this.props.styles : '' ]}>
        <TextInput 
          style = {[styles.form_items, this.props.inputStyle]} 
          placeholder={this.props.placeholder} 
          underlineColorAndroid='transparent' 
          placeholderTextColor="#a9a9a9"
          secureTextEntry={this.props.secureTextEntry}
          multiline={this.props.multiline}
          numberOfLines={this.props.numberOfLines}
          ref={'textInput'}/>
            { this.props.showClearButton && 
              <TouchableOpacity style={styles.clearBtn} onPress={() => this.clearText()}>
                <Image style={[styles.clearIcon,  this.props.imageStyle]} source={require('../../images/clear-icon.png')}/>
              </TouchableOpacity>}
      </View>
    );
  }
}

