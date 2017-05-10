import { StyleSheet, Dimensions } from 'react-native';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
    scroll: {
        backgroundColor: '#303B3D',
        padding: 50,
        flexDirection: 'column',
        height: HEIGHT-60,
        justifyContent: 'center',
        width: WIDTH
    },
    transparentButton: {
        borderColor: '#ff9f02',
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50
    },
    buttonText: {
        fontSize: 20,
        color: '#fff'
    },
    logo: {
        width: 200,
        height: 50
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 30
    },
    rememberText: {
        color: '#ccc',
        fontSize: 12,
        fontWeight: 'normal'
    },
    headerText: {
        color: '#fff',
        fontSize: 10
    },
    remembermeTextWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25,
    },
    header: {
        justifyContent: 'space-between',
    },
    emailInput: {
        
    },
    errMsg: {
        color: 'red',
        marginBottom: 25,
        marginTop: 5,
    }
});
