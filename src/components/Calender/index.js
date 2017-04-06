import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';
import Calender from 'react-native-calendar';
import styles from './style';


export default class extends Component {
    render(){
        return (
            <Calender
            dayHeadings={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
            prevButtonText={'<'}
            nextButtonText={'>'}
            showControls
            customStyle={styles}/>
        );
    }
}
