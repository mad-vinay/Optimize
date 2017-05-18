import React, { Component } from 'react';
import NavBar from '../../../components/native/navbar';
import TouchableHighlightBtn from '../../../components/native/highlight-btn';
import TouchableOpacityBtn from '../../../components/native/opacity-btn';
import Container from '../../../components/native/wrapper';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import styles from './style';

export default class SetInfo extends Component {
    render() {
        return (
       <View style={styles.wrapper}>
          <NavBar styles={styles.navWrapper}>
            <TouchableOpacityBtn
              navigator={this.props.navigation}
              onPress = { this.onPress } screen='MainCategory'
              styles={styles.logoutButton}
              label="< Back"/>
            <Text style={styles.headingText} >Set Info</Text>
          </NavBar>
          <View style={styles.imageWrapper}>
            <Container>
              <TouchableHighlightBtn
                  styles={styles.transparentButton}
                  label="Office Sets"
                  navigator={this.props.navigation}
                  onPress = { this.onPress } screen='OfficeSets'
              />
            </Container>
            <Container>
                <TouchableHighlightBtn
                    styles={styles.transparentButton}
                    onPress = { this.btnPress }
                    label="ExpressCare Sets"
                />
            </Container>
          </View>
        </View>
      );
    }
}