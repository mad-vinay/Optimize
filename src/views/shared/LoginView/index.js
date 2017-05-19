import React, { Component } from 'react';
import Image from '../../../components/shared/image';
import View from '../../../components/shared/view';
import Text from '../../../components/shared/text';
import InputField from '../../../components/shared/input-field';

import styles from './style';

export default class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			passwd:'',
			flag: true,
			emailText: "",
			passwordText: "",
			email: '',
			selected: false
		};
	}

	onClick = () => {
		if (this.signUpValidation()) {

	   		this.props.navigation.navigate('Teams');
	    }
	    else {
	      return false;
	    }
	}

	clearText = () => {
		this.refs['textInput'].setNativeProps({text: ''});
	}

	_onPressButton = () => {
        this.setState({
            selected: !this.state.selected,
        })
    };

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
  		const imageUrl=this.state.selected==true? require('../../../images/check-orange.png') :require('../../../images/check.png')
	    return (
	        <View style={styles.loginWrapper}>
	        	<View style={styles.navContainer}>
	        		<Text style={styles.containerText}>v3.4</Text>
	        		<Text style={styles.containerText}>T000v34-DFW1</Text>
	        	</View>
	        	<View style={styles.container}>
					<View style={styles.imageContainer}>
						<Image style={styles.logo} source={require('../../../images/Optimize-logo.png')}/>
					</View>
					<InputField style={styles.InputField} placeholderTextColor='#fff' placeholder = 'Email' ref={'textInput'} secureTextEntry={false} onChangeText={(email) => this.setState({email})}></InputField>
					<View>
						<Text style={styles.errMsg}>{this.state.emailText}</Text>
					</View>
					<InputField style={styles.InputField} placeholderTextColor='#fff' placeholder = 'Password' secureTextEntry={true} onChangeText={(passwd) => this.setState({passwd})}></InputField>
					<View>
						<Text style={styles.errMsg}>{this.state.passwdText}</Text>
					</View>
					<View style={styles.remembermeTextWrap}>
						<Text style={styles.rememberText}>Remember me</Text>
						<View onClick={this._onPressButton} style={styles.tickerWrap}>
					      <Image
					      	style={styles.tickImg}
					        source={imageUrl}
					      />
					    </View>
					</View>
					<View style={styles.transparentButton} onClick = { this.onClick }>
						<Text style={styles.buttonText}>Login</Text>
					</View>
				</View>
	        </View>
	    );
	}
}

