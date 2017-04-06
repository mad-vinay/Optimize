import { StyleSheet, Dimensions } from 'react-native';
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
    wrapper: {
        backgroundColor: '#303B3D',
        flexDirection: 'column',
        height: HEIGHT,
        justifyContent: 'center'
    },
    transparentButton: {
        borderColor: '#ff9f02',
        borderWidth: 1,
        borderRadius: 5
    },
    logoutButton: {
        borderWidth: 0,
        margin: 0,
        padding: 0,
        height: 20,
        width: 100,
        zIndex: 1,
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
        marginBottom: 30,
    },
    imageWrapper: {
        padding: 30,
    },
    navWrapper: {
        justifyContent: 'flex-end',
    },
    navItem: {
        fontSize: 12,
        color: '#ff9f02',
    }
});
