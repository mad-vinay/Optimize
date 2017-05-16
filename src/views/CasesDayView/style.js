import { StyleSheet, Dimensions } from 'react-native';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
    wrapper: {
        backgroundColor: '#303B3D',
        height: HEIGHT,
        margin: 0,
        padding: 0,
    },
    headingText: {
        color: "#fff",
        position: 'absolute',
        left: WIDTH / 2- 40,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
