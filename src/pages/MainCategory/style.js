import { StyleSheet, Dimensions } from 'react-native';
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
	wrapper: {
		backgroundColor: '#303B3D',
		padding: 30,
		flexDirection: 'column',
		height: HEIGHT,
		justifyContent: 'center'
	},
	transparentButton: {
	    borderColor: '#ff9f02',
	    borderWidth: 1,
	    borderRadius: 5
	},
	buttonText: {
	    fontSize: 20,
	    color: '#fff',
	},
	logo: {
		width: 200,
		height: 50
	},
	imageContainer: {
        alignItems: 'center',
        marginBottom: 30
	},
});