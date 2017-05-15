import React from 'react';
import {
  TextInput,
} from 'react-native';
export default function render(options = {}) {
  let { style, placeholder, placeholderTextColor, onChangeText} = options;

  return (
	<TextInput underlineColorAndroid='transparent' style={style}  placeholder={placeholder}  placeholderTextColor={placeholderTextColor} onChangeText={options.onChangeText}/>
  );
}
