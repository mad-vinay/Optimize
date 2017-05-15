import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Text,
  ListView
} from 'react-native';

import styles from './style';
import teams from '../../data/team.json'

export default class TeamDetail extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
     dataSource: ds.cloneWithRows(teams.team),
    };
  }
  renderRow = (data) => {
    return (
     <View style={styles.container}>
       <Text>{data.teamA.description}</Text>
      </View>
    );
  }

  render(){
    return (
      <ListView
        dataSource = {this.state.dataSource}
        renderRow = {this.renderRow}>
      </ListView>
    );
  }
}