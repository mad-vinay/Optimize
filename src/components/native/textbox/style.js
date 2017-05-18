/**
 * TextBox styles
 **/
const WIDTH = Dimensions.get('window').width,
    LOGIN_BG = '#748d92',
    LABEL_COLOR = '#fff';

import { StyleSheet, Dimensions } from 'react-native';


export default StyleSheet.create({
    loginform: {
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        paddingRight: 5,
        paddingLeft: 5,
        borderColor: LOGIN_BG,
        borderRadius: 5,
        borderWidth: 1,
    },
    form_items: {
        alignSelf: 'stretch',
        color: LABEL_COLOR,
        height: 42,
        fontSize: 16,
    },
    clearIcon: {
        width: 19,
        height: 19
    },
    clearBtn: {
        position: 'absolute',
        right: 10,
        top: 11,
    },
});
