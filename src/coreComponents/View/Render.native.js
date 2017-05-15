import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const WIDTH = Dimensions.get('window').width;

export default function render(options = {}) {
  let { style, children } = options;

  if (options.onClick)return (
    <TouchableOpacity style={style} onPress={options.onClick}>
      {children}
    </TouchableOpacity>
  );

  return (
    <View style={{width: WIDTH, ...options.style }}>
      {children}
    </View>
  );
}
