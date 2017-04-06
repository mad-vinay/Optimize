import React, { Component } from 'react';

import {
  StyleSheet,
  View
} from 'react-native';
import styles from './style';

export default class NavBar extends Component {

    render(){
        return (
            <View style={[
                    this.props.noDefaultStyles ? '' : styles.navContainer,
                    this.props.styles ? this.props.styles : '']}>
                { this.props.children }
            </View>
        );
    }
}
