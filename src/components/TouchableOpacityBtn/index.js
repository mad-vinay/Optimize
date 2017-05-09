import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './style';

export default class TouchableOpacityBtn extends Component {
    navigator = this.props.navigator;

    onPress = () => {

        this.props.navigator.navigate(this.props.screen);
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

