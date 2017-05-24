import React, { Component } from 'react';

import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import styles from './style';
import TouchableOpacityBtn from '../../../components/native/opacity-btn';
import NavBar from '../../../components/native/navbar';

export default class CaseDetailsView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      caseData : this.props.navigation.state.params.caseData.data
    };
  }
  render () {

    return (
      <View style={styles.wrapper}>
        <NavBar styles={styles.navWrapper}>
            <TouchableOpacityBtn
                navigator={this.props.navigation}
                onPress = { this.onPress }
                screen='ManageCase'
                label="< Back"/>
            <Text style={styles.headingText} >Case Details</Text>
            <TouchableOpacity
              onPress = { this.onPress }>
                <Text style={styles.navBtn}>Edit</Text>
            </TouchableOpacity>
        </NavBar>
        <View style={styles.row}>
          <View style={[styles.rowCell,styles.left]}>
            <Text style={[styles.cellData,styles.rowTitle]}>Surgeon</Text>
          </View>
          <View style={[styles.rowCell,styles.right]}>
            <Text style={styles.cellData}>{this.state.caseData.surgeon}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.rowCell,styles.left]}>
            <Text style={[styles.cellData,styles.rowTitle]}>Hospital</Text>
          </View>
          <View style={[styles.rowCell,styles.right]}>
            <Text style={styles.cellData}>{this.state.caseData.hospital}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.rowCell,styles.left]}>
            <Text style={[styles.cellData,styles.rowTitle]}>Procedure</Text>
          </View>
          <View style={[styles.rowCell,styles.right]}>
            <Text style={styles.cellData}>PRIMARY</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.rowCell,styles.left]}>
            <Text style={[styles.cellData,styles.rowTitle]}>Time</Text>
          </View>
          <View style={[styles.rowCell,styles.right]}>
            <Text style={styles.cellData}>{this.state.caseData.time}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.rowCell,styles.left]}>
            <Text style={[styles.cellData,styles.rowTitle]}>Side</Text>
          </View>
          <View style={[styles.rowCell,styles.right]}>
            <Text style={styles.cellData}>LEFT</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.rowCell,styles.left]}>
            <Text style={[styles.cellData,styles.rowTitle]}>Patient</Text>
          </View>
          <View style={[styles.rowCell,styles.right]}>
            <Text style={styles.cellData}>{this.state.caseData.patient}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.rowCell,styles.left]}>
            <Text style={[styles.cellData,styles.rowTitle]}>Rep</Text>
          </View>
          <View style={[styles.rowCell,styles.right]}>
            <Text style={styles.cellData}>{this.state.caseData.rep}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.rowCell,styles.left]}>
            <Text style={[styles.cellData,styles.rowTitle]}>Case No</Text>
          </View>
          <View style={[styles.rowCell,styles.right]}>
            <Text style={styles.cellData}>{this.state.caseData.case_no}</Text>
          </View>
        </View>
        <View style={[styles.row,styles.notes]}>
          <Text style={[styles.cellData,styles.rowTitle]}>Rep Notes (Not seen by office staff)</Text>
        </View>
        <View style={[styles.row,styles.notes]}>
          <Text style={[styles.cellData,styles.rowTitle]}>Office Notes</Text>
        </View>
      </View>
    );
  }
}
