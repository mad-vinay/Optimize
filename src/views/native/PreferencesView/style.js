import { StyleSheet, Dimensions } from 'react-native';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
    wrapper: {
        backgroundColor: '#303B3D',
        flexDirection: 'column',
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
        left: WIDTH/2-36,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    navWrapper: {
        position: 'relative',
    },
});
