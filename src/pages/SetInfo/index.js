import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import TouchableHighlightBtn from '../../components/TouchableHighlightBtn';
import TouchableOpacityBtn from '../../components/TouchableOpacityBtn';
import Container from '../../components/Container';

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
              navigator={this.props.navigator}
              onPress = { this.onPress } id='MainCategory'
              styles={styles.logoutButton}
              label="< Back"/>
            <Text style={styles.headingText} >Set Info</Text>
          </NavBar>
          <View style={styles.imageWrapper}>
            <Container>
              <TouchableHighlightBtn
                  styles={styles.transparentButton}
                  label="Office Sets"
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