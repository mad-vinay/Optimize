import React, { Component } from 'react';
import Container from '../../components/Container';
import TouchableHighlightBtn from '../../components/TouchableHighlightBtn';
import Ticker from '../../components/Ticker';
import NavBar from '../../components/NavBar';
import TextBox from '../../components/TextBox';

import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import styles from './style';

export default class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
		  email: '',
		  passwd:'',
		  flag: true,
	      emailText: "",
	      passwordText: ""
		};
	}

	onClick = () => {
		if (this.signUpValidation()) {
			
	   		this.props.navigation.navigate('MainCategory');
	    }
	    else {
	      return false;
	    }
	}

	signUpValidation() {
	    var emailFlag = "";
	    var passFlag = "";
	    var emailPattern = "";
	    var passwdPattern = "";
	    
	    if(this.state.email.length==0) {
	      this.setState({ emailText: "Email is a required feild"});
	      emailFlag = false;
	      
	    }
	    else {
			const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			emailPattern = EMAIL_REGEX.test(this.state.email);
			if(emailPattern){
				this.setState({ emailText: ""});
		        emailFlag = true;
		    }
		    else {
				this.setState({ emailText: "Email is invalid"});
				emailFlag = false;
		    }
		}
	    if(this.state.passwd.length==0) {
	      this.setState({ passwdText: "Password is a required feild"});
	      passFlag = false;
	      
	    }
	    else {
	    	const PASSWORD_REGEX = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{1,16}$/;
	    	passwdPattern = PASSWORD_REGEX.test(this.state.passwd);
	    	if(passwdPattern){
				this.setState({ passwdText: ""});
		        passFlag = true;
		    }
		    else {
				this.setState({ passwdText: "password is invalid"});
				passFlag = false;
		    }
	    }

	    return emailFlag && passFlag;
	}

  	render() {
	    return (

	    	<View>
		    	<NavBar style={styles.header}>
	        		<Text style={styles.headerText}>v3.4</Text>
		    		<Text style={styles.headerText}>T000v34-DFW1</Text>
			    </NavBar>
		        <View style={styles.scroll}>
					<View style={styles.imageContainer}>
						<Image style={styles.logo} source={require('../../images/Optimize-logo.png')}/>
					</View>
					<TextBox placeholder = 'Email' secureTextEntry={false} onChangeText={(email) => this.setState({email})}
						styles={styles.emailInput}></TextBox>
					<View>
						<Text style={styles.errMsg}>{this.state.emailText}</Text>
					</View>
					<TextBox placeholder = 'Password' secureTextEntry={true} onChangeText={(passwd) => this.setState({passwd})}></TextBox>
					<View>
						<Text style={styles.errMsg}>{this.state.passwdText}</Text>
					</View>
					<View style={styles.remembermeTextWrap}>
						<Text style={styles.rememberText}>Remember me</Text>
						<Ticker/>
					</View>
					<TouchableHighlight style={styles.transparentButton} onPress = { this.onClick }>
						<Text style={styles.buttonText}>Login</Text>
					</TouchableHighlight>
		        </View>
		    </View>
	    );
	}
}

