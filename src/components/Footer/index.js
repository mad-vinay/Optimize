import React, { Component } from 'react';

import {
  View
} from 'react-native';
import styles from './style';

export default class Footer extends Component {

    render(){
        return (
            <View style={[
                    this.props.noDefaultStyles ? '' : styles.footerContainer,
                    this.props.styles ? this.props.styles : '']}>
                { this.props.children }
            </View>
        );
    }
}
