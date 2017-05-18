/**
 * Case View Styles
**/

const DETAILS_BG = '#44585a',
      WHITE = '#fff';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  caseWrap : {
    flex: 1,
    marginBottom : 5
  },
  detailsRow : {
    flex: 1,
    flexDirection: 'row',
  },
  detailsWrap : {
    backgroundColor : DETAILS_BG,
    paddingVertical:  10,
    paddingRight: 5,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  rowItem : {
    borderColor: WHITE,
    borderWidth: 1,
    borderRadius: 1,
    paddingVertical: 2
  },
  rowItemText : {
    paddingHorizontal: 5,
    fontSize: 15,
    color: WHITE
  },
  caseTime : {
    flex: 1,
    fontSize: 15,
    color: WHITE
  },
  caseSurgeon : {
    flex: 2
  },
  caseHospital : {
    flex: 2
  },
  caseTPS : {
    flex: 1
  },
  casePatient : {
    flex: 4
  },
  caseRep : {
    flex: 3
  },
  caseCaseNo : {
    flex: 2,
  },
  caseCount : {
    flex: 1,
  },
  textCenter : {
    textAlign : 'center'
  }

});
