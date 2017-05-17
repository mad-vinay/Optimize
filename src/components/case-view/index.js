/**
 * Case View
**/
import React, { Component } from 'react';

import {
  View,
  Text
} from 'react-native';

import styles from './style';


export default class extends Component {
    getStatusStyles = () => {
      let status = this.props.caseData.status, bgColor, size = 15;
      if(status === 0) bgColor = 'red';
      else if (status === 1) bgColor = 'green';
      else if (status === 2) bgColor = 'yellow';
      return ({
        height: size,
        width: size,
        borderRadius: size/2,
        backgroundColor: bgColor,
        marginLeft: 7,
        marginRight: 7
      });
    }
    render(){
        return (
          <View style={styles.caseWrap}>
            <View style={styles.detailsRow}>
              <Text style={styles.caseTime}>{this.props.caseData.time}</Text>
            </View>
            <View style={styles.detailsWrap}>
                <View style={this.getStatusStyles()}></View>
                <View style={{flex:1}}>
                    <View style={styles.detailsRow}>
                      <View style={[styles.rowItem, styles.caseSurgeon]}><Text style={styles.rowItemText}>{this.props.caseData.surgeon.toUpperCase()}</Text></View>
                      <View style={[styles.rowItem, styles.caseHospital]}><Text style={styles.rowItemText}>{this.props.caseData.hospital.toUpperCase()}</Text></View>
                      <View style={[styles.rowItem, styles.caseTPS]}><Text style={styles.rowItemText}>{this.props.caseData.tps.toUpperCase()}</Text></View>
                    </View>
                    <View style={styles.detailsRow}>
                      <View style={[styles.rowItem, styles.casePatient]}><Text style={styles.rowItemText}>{this.props.caseData.patient.toUpperCase()}</Text></View>
                      <View style={[styles.rowItem, styles.caseRep]}><Text style={styles.rowItemText}>{this.props.caseData.rep.toUpperCase()}</Text></View>
                      <View style={[styles.rowItem, styles.caseCaseNo]}><Text style={[styles.rowItemText, styles.textCenter]}>{this.props.caseData.case_no}</Text></View>
                      <View style={[styles.rowItem, styles.caseCount]}><Text style={[styles.rowItemText, styles.textCenter]}>{this.props.caseData.count}</Text></View>
                    </View>
                </View>
            </View>
          </View>
        );
    }
}
