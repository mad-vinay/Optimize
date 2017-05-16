/**
 * Calender Component
 * The calender component consist of the react-native-calendar component.
**/
import React, { Component } from 'react';

import { View } from 'react-native';
import Calender from 'react-native-calendar';
import styles from './style';


export default class extends Component {
constructor(props) {
    super(props);
  }

  onDateSelect() {
    this.props.navigation.navigate('Login')
  }

    render(){
        return (
            <Calender dayHeadings    = {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
                      prevButtonText = {'<'}
                      nextButtonText = {'>'}
                      showControls
                      customStyle    = {styles} onDateSelect={(date) => this.onDateSelect(date)} />
        );
    }
}
