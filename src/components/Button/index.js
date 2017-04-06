import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';
import styles from './style';

export default class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonTextColor: '#fff',
        }
    }

    btnPress = () => {
        this.setState({
            buttonTextColor: '#ff9f02',
        })
        this.props.onPress && this.props.onPress();
    };

    getContent(){
        if(this.props.children){
            return this.props.children;
        }
        return <Text style={[this.props.styles.label, {color: [
                    this.props.textColor ? this.props.textColor : this.state.buttonTextColor]}]}>{this.props.label}</Text>
    }

    render(){
        return (
            <TouchableHighlight
                onPress={this.btnPress}
                style={[
                    this.props.noDefaultStyles ? '' : styles.button,
                    this.props.styles ? this.props.styles : '']}
            >
                { this.getContent() }
            </TouchableHighlight>
        );
    }
}

