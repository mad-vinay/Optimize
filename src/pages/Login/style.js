import { StyleSheet, Dimensions } from 'react-native';
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
	scroll: {
		backgroundColor: '#303B3D',
		padding: 50,
		flexDirection: 'column',
		height: HEIGHT,
	},
	textInput: {
	    height: 50,
	    fontSize: 20,
	    color: '#fff',
	    borderColor: '#ADD8E6',
	    borderWidth: 1,
	    borderRadius: 5
	},
	transparentButton: {
	    marginTop: 30,
	    borderColor: '#ff9f02',
	    borderWidth: 1,
	    borderRadius: 5
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
		color: '#fff'
	},
	headerText: {
		color: '#fff',
		fontSize: 10
	},
	header: {
  		flexDirection: 'row',
		justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
        padding: 10,
        backgroundColor: '#293334',
        borderBottomColor: '#46575a',
        borderStyle: 'solid',
        borderWidth: 1,
	},
	remembermeTextWrap: {
		flexDirection: 'row',
		justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
	}
});