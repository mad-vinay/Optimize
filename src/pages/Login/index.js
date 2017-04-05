import React, { Component } from 'react';
import Container from '../../components/Container';
import Button from '../../components/Button';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import styles from './style';

export default class Login extends Component {
	onPress = () => {
		const { navigator } = this.props;
		navigator.push({
		  id: 'MainCategory'
		});
	}

	render() {
	    return (

	    	<View>
		    	<View style={styles.header}>
		    		<Text style={styles.headerText}>v3.4</Text>
		    		<Text style={styles.headerText}>T000v34-DFW1</Text>
		    	</View>
		        <ScrollView style={styles.scroll}>
			        <View style={styles.imageContainer}>
			        	<Image
							style={styles.logo}
							source={require('../../images/Optimize-logo.png')}
				        />
				     </View>
			        <Container style={styles.containerstyle}>
					    <TextInput
					        style={styles.textInput}
					        placeholder = 'Email'
					        underlineColorAndroid='transparent'
					        placeholderTextColor="grey"
					    />
					    <Text style={styles.rememberText}>Remember Email</Text>
					</Container>
					<Container>
					    <TextInput
					        secureTextEntry={true}
					        style={styles.textInput}
					        placeholder = 'Password'
					        underlineColorAndroid='transparent'
					        placeholderTextColor="grey"
					    />
					    <Text style={styles.rememberText}>Remember Password</Text>
					</Container>
					<Container>
					    <Button 
					        styles={styles.transparentButton}
					        onPress = { this.onPress }
					    >
					        <Text style={styles.buttonText}>Login</Text>
					    </Button>
					</Container>
		        </ScrollView>
		    </View>
	    );
	}
}

