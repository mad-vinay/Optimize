import React, { Component } from 'react';
import NavBar from '../../../components/native/navbar';
import TouchableHighlightBtn from '../../../components/native/highlight-btn';
import TouchableOpacityBtn from '../../../components/native/opacity-btn';
import Container from '../../../components/native/wrapper';

import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text
} from 'react-native';
import styles from './style';

export default class Preferences extends Component {
    render() {
        return (
       <View style={styles.wrapper}>
          <NavBar styles={styles.navWrapper}>
            <TouchableOpacityBtn
              navigator={this.props.navigation}
              onPress = { this.onPress } screen='MainCategory'
              styles={styles.logoutButton}
              label="< Back"/>
            <Text style={styles.headingText} >Preferences</Text>
          </NavBar>
          <View style={styles.imageWrapper}>
            <Container>
              <TouchableHighlightBtn
                  navigator={this.props.navigation}
                  onPress = { this.onPress } screen='AddPreference'
                  styles={styles.transparentButton}
                  label="Add Preferences"
              />
            </Container>
            <Container>
                <TouchableHighlightBtn
                    styles={styles.transparentButton}
                    onPress = { this.btnPress }
                    label="Edit Preferences"
                />
            </Container>
            <Container>
                <TouchableHighlightBtn
                    styles={styles.transparentButton}
                    onPress = { this.btnPress }
                    label="Copy Preferences"
                />
            </Container>
          </View>
        </View>
        );
    }
}