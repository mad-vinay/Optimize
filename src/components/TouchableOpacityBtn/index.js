import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './style';

export default class TouchableOpacityBtn extends Component {
    navigator = this.props.navigator;

    onPress = (id) => {
        this.navigator.push({
          id: this.props.id
        });
    }

    getContent(){
        if(this.props.children){
            return this.props.children;
        }
        return <Text style={styles.labelStyle}>{this.props.label}</Text>
    }

    render(){
        return (
            <TouchableOpacity
                onPress={this.onPress}
                style={[
                    this.props.noDefaultStyles ? '' : styles.button,
                    this.props.styles ? this.props.styles : '']}
            >
                { this.getContent() }
            </TouchableOpacity>
        );
    }
}

