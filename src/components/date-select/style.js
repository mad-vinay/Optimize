import { StyleSheet } from 'react-native';

const BG_COLOR = '#313e3f',
      WHITE = '#ffffff';

export default StyleSheet.create({

  selectWrap : {
    flexDirection : 'row',
    height: 50,
    backgroundColor: BG_COLOR,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#ececec',
    borderWidth: 0.5,
    paddingHorizontal : 10
  },
  currentDate : {
    color: WHITE,
    fontSize: 22,
    fontWeight: 'bold'
  },
  dateSelectBtn : {
    color: WHITE,
    fontSize: 18
  }

});
