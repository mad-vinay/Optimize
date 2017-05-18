/**
 * Wrapper Component
 **/
import React, { Component } from 'react';

import { View } from 'react-native';
import styles from './style';

export default class Container extends Component {

    render(){
        return (
            <View style={styles.labelContainer}>
                { this.props.children }
            </View>
        );
    }
}
