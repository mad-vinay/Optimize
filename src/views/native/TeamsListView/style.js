import { StyleSheet, Dimensions } from 'react-native';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
    wrapper: {
        backgroundColor: '#303B3D',
        flexDirection: 'column',
        height: HEIGHT,
        flex: 1,
    },
    logoutButton: {
        borderWidth: 0,
        margin: 0,
        padding: 0,
        color: '#ff9f02'
    },
    buttonText: {
        fontSize: 12,
        color: '#fff',
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
        paddingTop: 10,
    },
    navWrapper: {
        justifyContent: 'flex-end',
    },
    headingText: {
        color: "#fff",
        position: 'absolute',
        left: WIDTH / 2 - 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    transparentButton: {
        borderColor: '#ff9f02',
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        marginTop: 40,
    },
    textStyle: {
        color: '#fff'
    },
    btnWrapper: {
      justifyContent: 'center',  
    }
});