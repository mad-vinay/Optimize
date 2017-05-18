import React, { Component } from 'react';

import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import styles from './style';
import moment from 'moment';

export default class extends Component {

    constructor(props) {
      super(props);
      this.state = {
        currentDate : this.props.startDate,
      };
    }

    prevDate = () => {
      this.setState({
        currentDate: moment(this.state.currentDate).subtract(1,'days')
      }, ()=>{
        this.props.onDateChange(moment(this.state.currentDate).format('MM-DD-YYYY'));
      });
    }

    nextDate = () => {
      this.setState({
        currentDate: moment(this.state.currentDate).add(1,'days')
      }, ()=>{
        this.props.onDateChange(moment(this.state.currentDate).format('MM-DD-YYYY'));
      });
    }

    dateInWords = () => {
      return ( moment(this.state.currentDate).format('ddd Do MMM YYYY') );
    }

    render() {
        return (
            <View style={styles.selectWrap}>
              <TouchableOpacity onPress = { this.prevDate }>
                <Text style={styles.dateSelectBtn}>Prev</Text>
              </TouchableOpacity>
              <Text style={styles.currentDate}>{this.dateInWords()}</Text>
              <TouchableOpacity onPress = { this.nextDate }>
                <Text style={styles.dateSelectBtn}>Next</Text>
              </TouchableOpacity>
            </View>
        );
    }
}
