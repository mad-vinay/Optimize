import { StyleSheet, Dimensions } from 'react-native';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
    wrapper: {
        backgroundColor: '#303B3D',
        flexDirection: 'column',
    },
    logoutButton: {
        borderWidth: 0,
        margin: 0,
        padding: 0,
        color: '#ff9f02'
    },
    logo: {
        width: 200,
        height: 50
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 30,
    },
    imageWrapper: {
        justifyContent: 'center',
        padding: 50,
        height: HEIGHT,
        paddingTop: 10,
    },
    navWrapper: {
        justifyContent: 'flex-end',
    },
    headingText: {
        color: "#fff",
        position: 'absolute',
        left: WIDTH / 2 - 38,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    transparentButton: {
        borderColor: '#ff9f02',
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginTop: 40,
    },
    textStyle: {
        color: '#fff'
    },
});