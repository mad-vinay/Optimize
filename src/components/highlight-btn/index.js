/**
 * Hightlight button Component
 * Extended TouchableHighlight component. On select the button is highlighted.
**/

import React, { Component } from 'react';

import { Text, TouchableHighlight } from 'react-native';
import styles from './style';

export default class HighlightBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonTextColor: '#fff',
        }
    }

    onPress = () => {
        this.setState({
            buttonTextColor: '#ff9f02',
        })

        this.props.navigator.navigate(this.props.screen);
    }

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
                onPress={this.onPress}
                style={[
                    this.props.noDefaultStyles ? '' : styles.button,
                    this.props.styles ? this.props.styles : '']}
            >
                { this.getContent() }
            </TouchableHighlight>
        );
    }
}

