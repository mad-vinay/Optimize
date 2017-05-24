import { StyleSheet, Dimensions } from 'react-native';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
    wrapper: {
        backgroundColor: '#303B3D',
        height: HEIGHT,
        margin: 0,
        padding: 0,
    },
    headingText: {
        fontSize: 22,
        color: '#ffffff'
    },
    navBtn: {
      color: '#ff9f02',
      fontSize: 16
    },
    notes: {
      flex: 1,
      padding: 10
    },
    row: {
       flexDirection: 'row',
       borderBottomWidth: 0.4,
       borderBottomColor: '#fff',
    },
    rowCell: {
      padding: 10,
    },
    left: {
      flex: 1,
    },
    right: {
      flex: 2,
      borderLeftWidth: 0.4,
      borderLeftColor: '#fff',
    },
    cellData: {
      fontSize: 18,
      color: '#fff',
      fontWeight: '100'
    },
    rowTitle: {
      fontWeight: '200',
    }
});
