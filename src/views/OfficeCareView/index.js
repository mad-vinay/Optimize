import React, {
  Component,
} from 'react';
import {
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import styles from './style';
import setInfo from '../../json/setInfo.json';
import AlphabetListView from 'react-native-alphabetlistview';

class SectionHeader extends Component {
  render() {
    // inline styles used for brevity, use a stylesheet when possible
    return (
      <View style={styles.sectionHeaderView}>
        <Text style={styles.sectionHeaderText}>{this.props.title}</Text>
      </View>
    );
  }
}

class SectionItem extends Component {
  render() {
    return (
      <Text style={styles.sectionItemText}>{this.props.title}</Text>
    );
  }
}

class Cell extends Component {
  render() {
    return (
      <View style={styles.cellView}>
        <Text style={styles.cellText}>{this.props.item.toUpperCase()}</Text>
      </View>
    );
  }
}

export default class OfficeCareView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {
        A: ['some','entries','are here'],
        B: ['some','entries','are here'],
        C: ['some','entries','are here'],
        D: ['some','entries','are here'],
        E: ['some','entries','are here'],
        F: ['some','entries','are here'],
        G: ['some','entries','are here'],
        H: ['some','entries','are here'],
        I: ['some','entries','are here'],
        J: ['some','entries','are here'],
        K: ['some','entries','are here'],
        L: ['some','entries','are here'],
        M: ['some','entries','are here'],
        N: ['some','entries','are here'],
        O: ['some','entries','are here'],
        P: ['some','entries','are here'],
        Q: ['some','entries','are here'],
        R: ['some','entries','are here'],
        S: ['some','entries','are here'],
        T: ['some','entries','are here'],
        U: ['some','entries','are here'],
        V: ['some','entries','are here'],
        W: ['some','entries','are here'],
        X: ['some','entries','are here'],
        Y: ['some','entries','are here'],
        Z: ['some','entries','are here'],
      }
    };
  }

  render() {
    return (
      <AlphabetListView style = {styles.AlphabetListViewBg}
        data={this.state.data}
        cell={Cell}
        cellHeight={30}
        sectionListItem={SectionItem}
        sectionHeader={SectionHeader}
        sectionHeaderHeight={22.5}
      />
    );
  }
}