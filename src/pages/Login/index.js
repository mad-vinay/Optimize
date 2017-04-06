import React, { Component } from 'react';
import Container from '../../components/Container';
import Button from '../../components/Button';
import Ticker from '../../components/Ticker';
import NavBar from '../../components/NavBar';


import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} from 'react-native';
import styles from './style';

export default class Login extends Component {
	render() {
	    return (

	    	<View>
		    	<NavBar style={styles.header}>
	        		<Text style={styles.headerText}>v3.4</Text>
		    		<Text style={styles.headerText}>T000v34-DFW1</Text>
			    </NavBar>
		        <View style={styles.scroll}>
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
					    <View style={styles.remembermeTextWrap}>
						    <Text style={styles.rememberText}>Remember Email</Text>
						    <Ticker/>
						</View>
					</Container>
					<Container>
					    <TextInput
					        secureTextEntry={true}
					        style={styles.textInput}
					        placeholder = 'Password'
					        underlineColorAndroid='transparent'
					        placeholderTextColor="grey"
					    />
					    <View style={styles.remembermeTextWrap}>
					    	<Text style={styles.rememberText}>Remember Password</Text>
					        <Ticker/>
						</View>
					</Container>
					<Container>
					    <Button
					        styles={styles.transparentButton}
					        navigator={this.props.navigator} id='MainCategory'
					    >
					        <Text style={styles.buttonText}>Login</Text>
					    </Button>
					</Container>
		        </View>
		    </View>
	    );
	}
}

