import React, { Component } from 'react';
import Container from '../../components/wrapper';
import TouchableHighlightBtn from '../../components/highlight-btn';
import Ticker from '../../components/ticker';
import NavBar from '../../components/navbar';
import TextBox from '../../components/textbox';

import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from './style';

export default class Login extends Component {
  	render() {
	    return (

	    	<View style={styles.scrollv}>
		    	<NavBar style={styles.header}>
	        		<Text style={styles.headerText}>v3.4</Text>
		    		<Text style={styles.headerText}>T000v34-DFW1</Text>
			    </NavBar>
		        <View style={styles.scroll}>
					<View style={styles.imageContainer}>
						<Image style={styles.logo} source={require('../../images/Optimize-logo.png')}/>
					</View>
					<TextBox placeholder = 'Email' secureTextEntry={false}></TextBox>
					<View style={styles.remembermeTextWrap}>
						<Text style={styles.rememberText}>Remember Email</Text>
						<Ticker/>
					</View>
					<TextBox placeholder = 'Password' secureTextEntry={true}></TextBox>
					<View style={styles.remembermeTextWrap}>
						<Text style={styles.rememberText}>Remember Password</Text>
						<Ticker/>
					</View>
					<TouchableHighlightBtn styles={styles.transparentButton} navigator={this.props.navigator} id='MainCategory'>
						<Text style={styles.buttonText}>Login</Text>
					</TouchableHighlightBtn>
		        </View>
		    </View>
	    );
	}
}

