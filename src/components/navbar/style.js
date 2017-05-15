/**
 * Navbar styles
**/
const NAVBAR_BG    = '#293334',
    BORDER_COLOR = '#46575a';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    navContainer: {
  		flexDirection: 'row',
		justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
        padding: 10,
        backgroundColor: NAVBAR_BG,
        borderBottomColor: BORDER_COLOR,
        borderStyle: 'solid',
        borderWidth: 1,
    },
});
