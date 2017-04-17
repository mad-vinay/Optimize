/**
 * Info Style sheet
 */
import { StyleSheet, Dimensions } from 'react-native';
const WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({

    loginform: {
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        paddingRight: 5,
        paddingLeft: 5,
        borderColor: '#748d92',
        borderRadius: 5,
        borderWidth: 1,
    },
    form_items: {
        alignSelf: 'stretch',
        color: '#fff',
        borderColor: '#748d92',
        borderRadius: 5,
        height:42,
        width:230,
        fontSize:16,
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
