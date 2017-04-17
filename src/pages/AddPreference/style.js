import { StyleSheet, Dimensions } from 'react-native';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
    wrapper: {
        backgroundColor: '#303B3D',
        flexDirection: 'column',
        height: HEIGHT,
    },
    transparentButton: {
        borderColor: '#ff9f02',
        borderWidth: 1,
        borderRadius: 5,
        height: 45
    },
    imageWrapper: {
        justifyContent: 'center',
        padding: 50,
        height: HEIGHT,
        paddingTop: 0,
    },
    headingText: {
        color: "#fff",
        position: 'absolute',
        left: WIDTH/2-38,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    navWrapper: {
        position: 'relative',
    },
    addPreferenceField: {
        borderRadius: 0,
        borderColor: '#303B3D',
        borderBottomColor: '#46575a',
        borderWidth: 1,
    },
    textInputStyle: {
        fontSize: 10,
        height: 36
    },
    InputStyle: {
        fontSize: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        height: 90
    }
});
